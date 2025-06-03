const express = require("express");
const app = express();

//middelware for json  and used to pass data to the body
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello welcome to home route");
});
app.get("/product", (req, res) => {
  res.send("hello welcome to product route");
});
app.get("/blog", (req, res) => {
  res.send("hello welcome to blog route");
});

const users = [
  {
    id: 1,
    name: "Rajan Shrestha",
    email: "rajan@example.com",
    role: "admin",
  },
  {
    id: 2,
    name: "Sita Sharma",
    email: "sita@example.com",
    role: "editor",
  },
  {
    id: 3,
    name: "Bikash Rai",
    email: "bikash@example.com",
    role: "viewer",
  },
  {
    id: 4,
    name: "Anita Gurung",
    email: "anita@example.com",
    role: "editor",
  },
  {
    id: 5,
    name: "Prakash Thapa",
    email: "prakash@example.com",
    role: "admin",
  },
];

app.get("/user", (req, res) => {
  // const data = [
  //   {
  //     name: "xyz",
  //     age: 22,
  //   },
  //   {
  //     name: "abc",
  //     age: 52,
  //   },
  //   {
  //     name: "efg",
  //     age: 2,
  //   },
  // ];

  res.send(users);
});
app.put("/getSingleUser/:id", (req, res) => {
  const { id } = req.params;
  const user = users.filter((user) => user.id == id);
  console.log(user);
  res.send("user is found");
});

app.patch("/updateSingleUser/:id", (req, res) => {
  const { id } = req.params;
  const { name,age } = req.body;

  const updateUsers = users.map((user) =>
    user.id == id ? { ...user, name: name,age:age } : user
  );
  console.log(updateUsers);
  res.send("user is updated");
});

app.post("/createProduct", (req, res) => {
  console.log(req.body);
  res.send("product is created");
});
app.put("/updateProduct/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send("products are updated");
});
app.patch("/updateSingleProduct/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send("product is updated");
});
app.delete("/deleteProduct/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send("product is deleted");
});
app.listen(3000, () => {
  console.log("server is running at port 3000 ....");
});
