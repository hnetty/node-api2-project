const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.send(`
    <h2>Project API</h2>
    `);
})

server.use("/api/posts", hubsRouter)

server.get("/", (req, res) => {
    res.status(200).json({ router: "posts"});
});

server.get("/:id", (req, res) => {
    res.status(200).json({ router: ":id"})
})

server.get("/:id/comments", (req, res) => {
    res.status(200).json({ router: "comments"})
}) 

server.post("/",(req, res) => {
    res.status(204).json({ router: "posts"})
})

server.post("/:id/comments", (req, res) => {
    res.status(200).json({ router: "comments" })
})

server.delete("/:id", (req, res) => {
    res.status(204).json({ router: ":id"})
})

server.put("/:id", (req, res) => {
    res.status(200).json({ router: ":id"})
})

// ------------------------------------
server.listen(8000, () => {
    console.log("Server is working!!! ITS WORKING!!!");
});