const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const app = jsonServer.create();
const router = jsonServer.router("data/db.json");

// Rules cho quyền (tùy bạn)
const rules = auth.rewriter({
  users: 600,
  posts: 644,
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);

app.listen(3001, () => {
  //console.log("JSON Server Auth is running on port 3001");
});
