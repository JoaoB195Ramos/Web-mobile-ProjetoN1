import Link from "next/link";
import Menu from "../components/menu";
import styles from "../components/menu.module.css";

export default function Pagina2() {
  return (
    <>
      <Menu />
      <p>
        Futuramente, iremos implementar uma API com dados de estresse e saúde
        para fornecer informações mais precisas e personalizadas para os
        usuários.
      </p>
      <Link href="/">Voltar</Link>
    </>
  );
}
