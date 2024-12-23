const express = require("express");
const app = express();
const port = 5500;
const cors = require("cors");
let mongoose = require("mongoose");
const UserModel = require('./Model/models.js')

app.use(express.json());
app.use(cors());
// {
//   origin: ['https://my-portfolio-kishanurankars-projects.vercel.app/'],
//   methods: ['GET', 'POST'],
//   credentials: true,
// }

mongoose.connect(
  // "mongodb+srv://kishanurankar:test@123@cluster0.qqlsq.mongodb.net/datastore?retryWrites=true&w=majority&appName=Cluster0",
  "mongodb://127.0.0.1:27017/datastore",
  { useNewUrlParser: true, useUnifiedTopology: true },
).then(()=>{
    console.log("MongoDB connection established")
})

app.post("/datastore", (req, res) => {
  console.log(req.body);
  res.send(req.body);
  UserModel.create(req.body).then((data)=>{
    res.json(data);
  })
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is running on port http://localhost:${port}`);
});
