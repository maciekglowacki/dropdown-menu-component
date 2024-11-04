import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DropdownMenu from "./DropdownMenu.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DropdownMenu />
  </StrictMode>
);
