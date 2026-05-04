import SectionDetalhes from "./UI/SectionDetalhes";
import SectionFicha from "./UI/SectionFicha";
import { useTheme } from "../../context/ThemeContext";

export default function Home() {
  const { temaEscuro } = useTheme();
  return (
    <>
      <div>
          <SectionFicha temaEscuro={temaEscuro} />
          <SectionDetalhes />
      </div>
    </>
  );
}
