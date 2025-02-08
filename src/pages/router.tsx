import { Routes, Route } from "react-router-dom";
import { Main } from "./main/page";
import { Detail } from "./detail/page";
import { AuditEditPage } from "./upload/page";
import { Intro } from "./intro/page";

export function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/auditedit" element={<AuditEditPage />} />
      <Route path="/intro" element={<Intro />} />
      <Route path="/articles/:articlesId" element={<Detail />} />
    </Routes>
  );
}
