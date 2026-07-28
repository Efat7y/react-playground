import "./style.css";
import { team } from "../../../Data/itemCard";
import AboutCart from "./components/AboutCart";
export default function Card() {
  return (
    <div className="App">
      {team.map((member) => (
        <AboutCart key={member} member={member} />
      ))}
    </div>
  );
}
