import { Header } from "@/containers/ui/header";
import PartOne from "./containers/PartOne";

export function Intro() {
  return (
    <div className="main">
      <div className="main_content ">
        <Header />
        <PartOne />
      </div>
    </div>
  );
}
