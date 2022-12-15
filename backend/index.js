const { PrismaClient } = require("@prisma/client");
const express = require("express");
const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.post("/job", async (req, res) => {
  const job = await prisma.job.create({ data: req.body });
  res.json(job);
});

app.get("/jobs", async (req, res) => {
  const job = await prisma.job.findMany();
  res.json(job);
});

const port = process.env.PORT || "3001";

app.listen(port, () => {
  console.log(`Server Running at ${port} 🚀`);
});