#!/usr/bin/env node

//this is a file that directly executed from terminal without writing node index.js

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(
    "This is a test npm package created by Bilal ARKAN for test purposes"
  );
});

app.listen(3005, () => {
  console.log("listing 3005");
});
