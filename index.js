import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

//перше завдання(варіант 1)
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const filePath = path.join(__dirname, "files", "The Wind in the Willows (introductory fragment).txt");
// const additionalText = "introductory fragment, copying is prohibited.\n";

// fs.readFile(filePath, "utf8", (err, data) => {
//   if (err) {
//     console.error("File read error:", err);
//     return;
//   }

//   const lines = data.split("\n");
//   const modifiedLines = [];

//   for (let i = 0; i < lines.length; i++) {
//     modifiedLines.push(lines[i]);
//     modifiedLines.push(additionalText.repeat(Math.floor(Math.random() * 0.2) + 1));
//   }

//   const modifiedText = modifiedLines.join("\n");

//   fs.writeFile(filePath, modifiedText, "utf8", (err) => {
//     if (err) {
//       console.error("File write error:", err);
//       return;
//     }
//     console.log("Text changed successfully");
//   });
// });

// переше завдання(варіант 2)
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const book = "The Wind in the Willows (introductory fragment).txt";

// const readStream = fs.createReadStream(path.join(__dirname, "/files", book), {highWaterMark: 1024});
// const writeStream = fs.createWriteStream(path.join(__dirname, "/files", "book_copy.txt"));

// readStream.on("data", (chunk) => {
//   writeStream.write("\n---introductory fragment, copying is prohibited.---\n");
//   writeStream.write(chunk);

// })

//друге завдання
// const log = (data) => {
//   process.stdout.write(data.toString());
// };
// log("The best frontend developer in the world");

//третє завдання
// const askTechnology = (question) => {
//   return new Promise((resolve, reject) => {
//     process.stdout.write(question);
//     process.stdin.once("data", (data) => {
//       const responce = data.toString().trim();
//       if (
//         responce === "Y" ||
//         responce === "y" ||
//         responce === "yes" ||
//         responce === "YES"
//       ) {
//         resolve(true);
//       } else if (
//         responce === "N" ||
//         responce === "n" ||
//         responce === "no" ||
//         responce === "NO"
//       ) {
//         resolve(false);
//       } else {
//         reject(new Error("Invalid response format"));
//       }
//     });
//   });
// };
// (async () => {
//   try {
//     const question_SCSS = await askTechnology("Dou you want to use SCSS?: ");
//     const question_ESlint = await askTechnology("Do you want to use ESlint: ");
//     process.stdout.write(`SCSS: ${question_SCSS}\n`);
//     process.stdout.write(`ESlint: ${question_ESlint}\n`);
//     process.exit();
//   } catch (error) {
//     process.stderr.write(error.message);
//     process.exit(1);
//   }
// })
// ();
