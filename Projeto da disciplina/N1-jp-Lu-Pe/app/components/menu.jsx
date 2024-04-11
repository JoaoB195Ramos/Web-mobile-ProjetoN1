import Link from "next/link";
import Style from "./menu.module.css";

export default function Menu() {
  return (
    <nav className={Style.menu}>
      <ul>
        <li>
          {" "}
          <Link href="/">Home</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/pagina1?name=Grupo">Fórum online</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/pagina2">API</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/pagina3">Perfil</Link> 
        </li>
      </ul>
    </nav>
  );
}
