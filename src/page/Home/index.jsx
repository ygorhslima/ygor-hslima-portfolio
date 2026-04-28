import SectionDetalhes from "./components/SectionDetalhes";
import SectionFicha from "./components/SectionFicha";
import { useTheme } from "../../context/ThemeContext";

export default function Home() {
  const { temaEscuro } = useTheme();
  return (
    <div>
        <SectionFicha temaEscuro={temaEscuro} />
        <SectionDetalhes />
    </div>
  );
}
