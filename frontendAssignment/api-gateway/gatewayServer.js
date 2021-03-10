const express = require("express");
const app = express();
const axios = require("axios");

//make json spaces by 2
app.set("json spaces", 2);

app.get("/api/trips", (req, res) => {
  //Get data from json server by input the query
  axios
    .get("http://localhost:9000/trips", { params: req.query })
    .then((resp) => {
      if (resp.data.length > 0) {
        res.status(200).json({ msg: resp.data });
      } else {
        res.json({ msg: resp.data });
      }
    })
    .catch((error) => {
      res.status(400).json("Bad request");
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
