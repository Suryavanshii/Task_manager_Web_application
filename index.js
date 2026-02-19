const http = require("http");

let tasks = [
  { id: 1, title: "Learn React", completed: false },
  { id: 2, title: "Build Project", completed: false }
];

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "GET" && req.url === "/tasks") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(tasks));
  }

  if (req.method === "POST" && req.url === "/tasks") {
    let body = "";
    req.on("data", chunk => (body += chunk));
    req.on("end", () => {
      const newTask = JSON.parse(body);
      newTask.id = Date.now();
      newTask.completed = false;
      tasks.push(newTask);
      res.end(JSON.stringify(newTask));
    });
  }

  if (req.method === "PUT" && req.url.startsWith("/tasks/")) {
    const id = Number(req.url.split("/")[2]);
    tasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    res.end(JSON.stringify({ success: true }));
  }

  if (req.method === "DELETE" && req.url.startsWith("/tasks/")) {
    const id = Number(req.url.split("/")[2]);
    tasks = tasks.filter(task => task.id !== id);
    res.end(JSON.stringify({ success: true }));
  }
});

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
