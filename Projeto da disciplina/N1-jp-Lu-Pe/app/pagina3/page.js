import Link from "next/link";
import Menu from "../components/menu";
import styles from "../components/menu.module.css";

export default function Pagina2() {
  return (
    <>
      <Menu />
      <div className={styles.profileContainer}>
        <h1 className={styles.profileTitle}>Perfil</h1>
        <img
          src="/download.jpg"
          alt="Nome do Usuário"
          className={styles.profileImage}
        />
        <h2>Joao Pedro</h2>
        <p className={styles.profileInfo}>Idade: 23 anos</p>
        <p className={styles.profileInfo}>
          E-mail: joaopedrobianchini195@gmail.com
        </p>
        <p className={styles.profileDescription}>
          Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus sed dolor finibus, vestibulum urna sed, placerat nulla.
        </p>
      </div>
      <Link href="/">Voltar</Link>
    </>
  );
}
