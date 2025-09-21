
import { BrowserRouter, Routes, Route} from "react-router";
import MainNavigationMenu from "./components/main-navigation-menu";
import MainFooter from "./components/main-footer";
import Home from "./pages/home";
import Items from "./pages/items";


import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";

export function App() {
  return (
    <BrowserRouter>
      <div className="bg-background flex flex-col min-h-svh">

        <MainNavigationMenu />

        <main className="flex-1 px-6 py-4 border rounded-2xl m-1 bg-background2">
          <div className="max-w-7xl m-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/items" element={<Items />} />
            </Routes>
          </div>
        </main>

        <MainFooter />

      </div>
    </BrowserRouter>
  );
}

export default App;
