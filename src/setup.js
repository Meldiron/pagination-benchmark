import * as fs from "fs";
import mysql from "mysql2/promise";

const config = JSON.parse(fs.readFileSync("config.json").toString());
const timeStart = Date.now();

(async () => {
 console.log("🤖 Connecting to database ...");

 const connection = await mysql.createConnection({
  host: config.mariadbHost,
  port: config.mariadbPost,
  user: config.mariadbUser,
  password: config.mariadbPassword,
  database: `appwrite`,
 });

 const promises = [];

 console.log("🤖 Database connection established");
 console.log("🤖 Preparing database queries ...");

 let index = 1;
 for (let i = 0; i < 100; i++) {
  const queryValues = [];

  for (let l = 0; l < 10000; l++) {
   queryValues.push(`('id${index}', '[]', '[]')`);
   index++;
  }

  const query = `INSERT INTO _project_${
   config.projectId
  }_posts (_uid, _read, _write) VALUES ${queryValues.join(", ")}`;
  promises.push(connection.execute(query));
 }

 console.log("🤖 Pushing data. Get ready, this will take quite some time ...");

 await Promise.all(promises);
})()
 .then(() => {
  console.error(
   `🌟 Successfully finished in ${Math.round((Date.now() - timeStart) / 1000)}s`
  );
  process.exit();
 })
 .catch((err) => {
  console.error("🚨 Unexpected error:");
  console.log(err);
  process.exit();
 });
