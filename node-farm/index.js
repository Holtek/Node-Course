const fs = require("fs");
const http = require("http");
const url = require("url");

//////////////////////
//  FILES

// Blocking , synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// // console.log(textIn);
// const textOut = `somebody once told me the world is gonna roll me ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("file has been written");
// console.log(textOut);

// Non-Blocking , synchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("object");
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", err => {
//         console.log("File has been written");
//       });
//     });
//   });
// });

//////////////////////
//  SERVER
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the overview");
  } else if (pathName === "/product") {
    res.end("This is the product");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
    res.end("This is the api");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html"
    });
    res.end("<h1>PAGE NOT FOUND</h1>");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening to requests on port 3000");
});
