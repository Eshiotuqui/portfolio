import { Analytics } from "@vercel/analytics/react";
import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Header from "./components/Header/Header.tsx";
import CustomCursor from "./components/CustomCursor/CustomCursor.tsx";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu/Menu.tsx";

export function Root() {
  /*   const location = useLocation(); */
  const [menu, setMenu] = useState(false);

  return (
    <>
      <CustomCursor />
      <Header menu={menu} setMenu={setMenu} />
      <Menu menu={menu} setMenu={setMenu} />
      <App menu={menu} />
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Root />
      <Analytics />
    </BrowserRouter>
  </StrictMode>
);
