import express from "express";

const app = express();

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send(`Hello from ${req.body.name}`);
});

app.listen(8000, () => {
  console.log("Server is started on port 8000");
});
