import { Routes, Route } from "react-router-dom";
import { Main } from "./main/page";
import { Detail } from "./detail/page";

export function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
}
