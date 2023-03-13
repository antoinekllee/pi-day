import { createRoot } from "react-dom/client";
import { createElement } from "react";
import { App } from "./app.component";
import "./styles.css";

const element = document.getElementById("root")!;
const root = createRoot(element);

root.render(createElement(App));

// import { createRoot } from "react-dom";
// import { createElement } from "react";

// import { App } from "./app.component";

// const element = document.getElementById("root") as HTMLElement;

// const root = createRoot(element);

// root.render(createElement({ type: App }));
