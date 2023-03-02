import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <MemoryRouter>
   <BrowserRouter> 
    <App />
    </BrowserRouter> 
  // </MemoryRouter>
);
