import express from "express";
const app = express();
const PORT = 3015;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {name: 'Donald Duck'});
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
