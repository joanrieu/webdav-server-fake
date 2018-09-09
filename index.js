const assert = require("assert");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

const DIR = process.argv[2] || process.cwd();

const app = express();

// log requests
app.use(morgan("tiny"));

// allow cross-domain requests
app.use(cors());

// read files (and provide Last-Modified header)
app.all("/:file", express.static(DIR));

// write files
app.put("/:file", bodyParser.raw(), (req, res) => {
  const filePath = path.join(DIR, req.params.file);
  fs.writeFileSync(filePath, req.body);
  res.send();
});

app.listen(8080);
