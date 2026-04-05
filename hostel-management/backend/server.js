const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// ✅ MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/hostelDB")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log(err));

// ✅ Models
const User = mongoose.model("User", { username: String, password: String });
const Room = mongoose.model("Room", { roomNumber: String, studentName: String });
const Complaint = mongoose.model("Complaint", { issue: String });
const Fee = mongoose.model("Fee", { amount: String });
const Mess = mongoose.model("Mess", { menu: String });
const Notice = mongoose.model("Notice", { title: String, message: String });
const Medical = mongoose.model("Medical", { doctor: String, problem: String });

// ✅ Root
app.get("/", (req, res) => res.send("🚀 Server Running"));

// ✅ Add test user
app.get("/adduser", async (req, res) => {
  await User.create({ username: "Roopika", password: "898560" });
  res.send("User Added ✅");
});

// ✅ Login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "123") {
    return res.send({ success: true });
  }

  const user = await User.findOne({ username, password });
  res.send({ success: !!user });
});

// ✅ APIs
app.post("/rooms", async (req, res) => {
  await Room.create(req.body);
  res.send("Saved");
});
app.get("/rooms", async (req, res) => res.send(await Room.find()));

app.post("/complaints", async (req, res) => {
  await Complaint.create(req.body);
  res.send("Saved");
});
app.get("/complaints", async (req, res) => res.send(await Complaint.find()));

app.post("/fees", async (req, res) => {
  await Fee.create(req.body);
  res.send("Saved");
});
app.get("/fees", async (req, res) => res.send(await Fee.find()));

app.post("/mess", async (req, res) => {
  await Mess.create(req.body);
  res.send("Saved");
});
app.get("/mess", async (req, res) => res.send(await Mess.find()));

app.post("/notices", async (req, res) => {
  await Notice.create(req.body);
  res.send("Saved");
});
app.get("/notices", async (req, res) => res.send(await Notice.find()));

app.post("/medical", async (req, res) => {
  await Medical.create(req.body);
  res.send("Saved");
});
app.get("/medical", async (req, res) => res.send(await Medical.find()));

app.listen(5000, () => console.log("🚀 Server on http://localhost:5000"));