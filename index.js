const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const DIR = '..'
 
const app = express();
app.use(function (req, res, next) {
	next();
	console.log(req.method + " " + req.url + " ==> " + res.statusCode);
});
app.use(cors());
app.use(express.static(DIR));
app.put('/:file', bodyParser.raw(), (req, res) => {
	res.send(fs.writeFileSync(path.join(DIR, req.params.file), req.body));
});
app.listen(8080);
