import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    fetch("/api/tasks")
      .then(res => res.json())
      .then(data => {
        setTasks(data);
        setLoading(false);
      })
      .catch(err => console.error("Error fetching tasks:", err));
  };

  const addTask = () => {
    if (!title.trim()) return;
    fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title })
    })
      .then(res => res.json())
      .then(task => {
        setTasks([...tasks, task]);
        setTitle("");
      });
  };

  const toggleTask = id => {
    fetch(`/api/tasks?id=${id}`, { method: "PUT" })
      .then(() => {
        setTasks(
          tasks.map(task =>
            task.id === id
              ? { ...task, completed: !task.completed }
              : task
          )
        );
      });
  };

  const deleteTask = id => {
    fetch(`/api/tasks?id=${id}`, { method: "DELETE" })
      .then(() => setTasks(tasks.filter(task => task.id !== id)));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') addTask();
  };

  return (
    <div className="container">
      <h2>Task Manager</h2>

      <div className="input-group">
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What needs to be done?"
        />
        <button onClick={addTask}>Add</button>
      </div>

      {loading ? (
        <p style={{ textAlign: "center", color: "#888" }}>Loading tasks...</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <span
                className={`task-text ${task.completed ? "completed" : ""}`}
                onClick={() => toggleTask(task.id)}
              >
                {task.title}
              </span>
              <div className="actions">
                <button
                  className="btn-icon btn-check"
                  onClick={() => toggleTask(task.id)}
                  title={task.completed ? "Mark as incomplete" : "Mark as complete"}
                >
                  {task.completed ? "↩️" : "✅"}
                </button>
                <button
                  className="btn-icon btn-delete"
                  onClick={() => deleteTask(task.id)}
                  title="Delete task"
                >
                  🗑️
                </button>
              </div>
            </li>
          ))}
          {tasks.length === 0 && (
            <p style={{ textAlign: "center", color: "#888", marginTop: "20px" }}>
              No tasks yet. Add one above!
            </p>
          )}
        </ul>
      )}
    </div>
  );
}

export default App;
