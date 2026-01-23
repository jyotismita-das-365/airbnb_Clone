//Core Module
const path = require('path');

//External module
const express = require('express');

//Local module
const userRouter = require("./routes/userRouter");
const {hostRouter} = require("./routes/hostRouter");
const rootDir = require('./utils/pathUtil');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, 'public')))

app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', '404.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});