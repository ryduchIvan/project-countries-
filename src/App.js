import "./index.css";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { Details } from "./pages/Details";
import { Main } from "./components/Main";
import { NotFound } from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
console.log(1);
export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}
