// console.log("Hello");
// console.log(process.env.dima);
// console.log(process.env.ihor);
// console.log(process.argv);

// 1998 - cjs - require
// 2015 - es6 - import

// require("./calculator");

// require("./oop");

// require("./files");

const fileService = require("./rest");
const express = require("express");

const app = express();
app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await fileService.display();
  res.status(200).json({ code: 200, data: users });
});

app.post("/users", async (req, res) => {
  const users = await fileService.create(req.body);
  console.log(users);
  res.status(201).json({ code: 201, message: "Success" });
});

app.post("/users/add", async (req, res) => {
  await fileService.add(req.body);
  res.status(201).json({ code: 201, message: "Success" });
});

app.delete("/users", async (req, res) => {
  await fileService.remove();
  res.status(200).json({ code: 200, message: "Success" });
});

app.patch("/users/:id", async (req, res) => {
  await fileService.updateOne(req.params.id, req.body);
  res.status(200).json({ code: 200, message: "Success" });
});

app.delete("/users/:id", async (req, res) => {
  await fileService.removeOne(req.params.id);
  res.status(200).json({ code: 200, message: "Success" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
