import SectionDetalhes from "../components/SectionDetalhes/";
import SectionFicha from "../components/SectionFicha/";
import Footer from "../components/Footer/";
import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const { temaEscuro } = useTheme();
  return (
    <div>
        <SectionFicha temaEscuro={temaEscuro} />
        <SectionDetalhes />
        <Footer />
    </div>
  );
}
