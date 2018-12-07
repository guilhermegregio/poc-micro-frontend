import * as singleSpa from "single-spa";
import { matchingPathname, runScript } from "./utils";

const loadChildCraApp = async () => {
  await runScript("http://localhost:3000/static/js/bundle.js");
  await runScript("http://localhost:3000/static/js/0.chunk.js");
  await runScript("http://localhost:3000/static/js/main.chunk.js");
  return window.childCraApp;
};

export const registerChildCraApp = () => {
  singleSpa.registerApplication(
    "child-cra-app",
    loadChildCraApp,
    matchingPathname(["/child-cra", "/"]) // This will be visible on these two routes
  );
};
