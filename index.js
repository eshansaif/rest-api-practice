const app = require("./app");
const punycode = require("punycode/");

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
