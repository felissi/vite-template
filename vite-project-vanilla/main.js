// import "./style.css";
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";
import { setupCounter } from "@features/counter/counter";
import { test } from "@features/test";

setupCounter(document.querySelector("#counter"));
test();
