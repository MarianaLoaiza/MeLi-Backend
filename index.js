require("dotenv").config();
const express = require("express");
const app = express();
var cors = require("cors");
const Id = require("./models/id");
const Search = require("./models/search");
app.use(cors());

const PORT = process.env.PORT;

const query = async (item) => {
  const search = new Search();

  const products = await search.items(item);

  return products;
};

const queryId = async (item) => {
  const idItems = new Id();

  const products = await idItems.items(item);
  return products;
};

app.get("/api/items", async (request, response, next) => {
  const params = request.query.q;
  try {
    const list = await query(params);

    response.status(200).json({
      data: list,
      message: "product listed",
    });
  } catch (err) {
    next(err);
  }
});
app.get("/api/items/:id", async (request, response, next) => {
  const id = request.params.id;

  try {
    const idITem = await queryId(id);

    response.status(200).json({
      data: idITem,
      message: "product listed",
    });
  } catch (err) {
    next(err);
  }
});

app.listen(PORT, function () {
  console.log(
    `CORS-enabled web server listening on port http://localhost:${PORT}`
  );
});
