const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

router.get("/posts", async (_req, res) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  res.json(data);
});

router.get("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();
  res.json(data);
});

module.exports = router;
