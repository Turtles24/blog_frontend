import { Header } from "@/containers/ui/header";
import SectionOne from "./containers/SectionOne";
import SectionSecond from "./containers/SectionSecond";

export function Intro() {
  return (
    <div className="main">
      <div className="main_content ">
        <Header />
        <SectionOne />
        <SectionSecond />
      </div>
    </div>
  );
}
