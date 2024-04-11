import React from "react";

const Forum = () => {
  return (
    <section id="forum" className="forum">
      <div className="forum-container">
        <div className="forum-header">
          <h1>Fórum</h1>
          <p>
            Espaço para discussões e suporte entre os alunos que praticam
            trabalho voluntário.
          </p>
        </div>
        <div className="forum-content">
         
          <div className="forum-post">
            <h3>Importância da Saúde Mental para Alunos Voluntários</h3>
            <p>
              Como vocês lidam com o estresse e a pressão do trabalho voluntário
              no Mackenzie?
            </p>
          </div>
          
          <div className="forum-post">
            <h3>Estratégias para Promover o Bem-Estar</h3>
            <p>
              Quais estratégias vocês utilizam para promover o bem-estar e a
              saúde mental durante o trabalho voluntário?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forum;
