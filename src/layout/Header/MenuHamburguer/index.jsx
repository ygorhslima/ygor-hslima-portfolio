import { Menu } from "lucide-react";
import "./style.css";
export default function MenuHamburguer({ onClick }) {
  return (
    <div onClick={onClick} className="MenuHamburguer">
      <Menu />
    </div>
  );
}
