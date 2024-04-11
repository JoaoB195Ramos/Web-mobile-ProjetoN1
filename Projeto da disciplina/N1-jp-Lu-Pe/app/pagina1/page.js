import Link from "next/link";
import Menu from "../components/menu";
import styles from "../globals.css";

export default function Pagina1() {
  return (
    <>
      <Menu />
      <h1>Fórum online</h1>

      {/* Exemplo de fórum */}
      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <h2>Importância da Saúde Mental para Alunos Voluntários</h2>
          <p>
            -- É fundamental cuidar da saúde mental ao realizar trabalho
            voluntário.
          </p>
          <p>
            Como vocês lidam com o estresse e a pressão do trabalho voluntário
            no Mackenzie?
          </p>
          <div className={styles.reply}>
            <img
              src="/download.jpg"
              alt="Ícone de resposta"
              className="forum-icon"
            />
            <p>
              -- É essencial estabelecer limites, praticar atividades de
              relaxamento e buscar apoio quando necessário. A universidade deve
              oferecer suporte psicológico aos alunos voluntários.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h2>Estratégias para Promover o Bem-Estar</h2>
          <p>
            -- Quais estratégias vocês utilizam para promover o bem-estar e a
            saúde mental durante o trabalho voluntário?
          </p>
          <div className={styles.reply}>
            <img
              src="/download.jpg"
              alt="Ícone de resposta"
              className="forum-icon"
            />
            <p>
              -- Praticar exercícios físicos, meditação e ter momentos de
              descanso são estratégias eficazes para manter o bem-estar durante
              o trabalho voluntário.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h2>Desafios e Superando Obstáculos</h2>
          <p>
            -- Quais são os principais desafios enfrentados pelos alunos
            voluntários e como superá-los?
          </p>
          <div className={styles.reply}>
            <img
              src="/download.jpg"
              alt="Ícone de resposta"
              className="forum-icon"
            />
            <p>
              -- Os principais desafios são o estresse, a sobrecarga de trabalho
              e a falta de tempo. É importante aprender a delegar tarefas,
              organizar o tempo e buscar ajuda quando necessário.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h2>Recursos Disponíveis no Mackenzie</h2>
          <p>
            -- O Mackenzie oferece algum recurso ou suporte específico para
            auxiliar os alunos voluntários na promoção da saúde mental?
          </p>
          <div className={styles.reply}>
            <img
              src="/download.jpg"
              alt="Ícone de resposta"
              className="forum-icon"
            />
            <p>
              -- Sim, o Mackenzie oferece serviços de apoio psicológico, grupos
              de apoio e workshops sobre saúde mental e bem-estar.
            </p>
          </div>
        </div>
      </div>

      <Link href="/">Voltar</Link>
    </>
  );
}
