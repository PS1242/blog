import express from "express";

let articlesInfo = [
  {
    name: "learn-react",
    upvotes: 0,
  },
  {
    name: "learn-node",
    upvotes: 0,
  },
  {
    name: "mongo",
    upvotes: 0,
  },
];

const app = express();

app.use(express.json());

app.put("/api/articles/:name/upvote", (req, res) => {
  const { name } = req.params;
  const article = articlesInfo.find((item) => item.name === name);
  if (article) {
    article.upvotes += 1;
    res.send(`The ${name} articles now has ${article.upvotes} upvotes`);
  } else {
    res.send("That article does not exist");
  }
});

app.get("/hello", (req, res) => {
  res.send(`Hello from ${req.body.name}`);
});

app.listen(8000, () => {
  console.log("Server is started on port 8000");
});
