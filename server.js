const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const schema = require("./schema.js");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

// Allow cross origin requests
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.use(express.static("public"));

app.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
