const fs = require("fs");
const http = require("http");

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

const server = http.createServer((req, res) => {
  res.end("hello from the server");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening to requests on port 3000");
});
