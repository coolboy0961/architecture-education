import dotenv from "dotenv";

// Customize the path of dotenv env files
let path: string;
if (process.env.STAGE) {
  path = `./env/.env.${process.env.STAGE}`;
} else {
  path = "./env/.env";
}
const result = dotenv.config({
  path,
  encoding: "utf-8",
});
if (result.error) {
  throw result.error;
}
