
let tasks = [
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build Project", completed: false }
];

export default function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    try {
        if (req.method === "GET") {
            res.status(200).json(tasks);
            return;
        }

        if (req.method === "POST") {
            const newTask = req.body;
            newTask.id = Date.now();
            newTask.completed = false;
            tasks.push(newTask);
            res.status(201).json(newTask);
            return;
        }

        if (req.method === "PUT") {
            const { id } = req.query;
            const taskId = Number(id);

            const taskIndex = tasks.findIndex(t => t.id === taskId);
            if (taskIndex > -1) {
                tasks[taskIndex].completed = !tasks[taskIndex].completed;
                res.status(200).json({ success: true });
            } else {
                res.status(404).json({ error: "Task not found" });
            }
            return;
        }

        if (req.method === "DELETE") {
            const { id } = req.query;
            const taskId = Number(id);
            tasks = tasks.filter(task => task.id !== taskId);
            res.status(200).json({ success: true });
            return;
        }

        res.status(405).json({ error: "Method not allowed" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
