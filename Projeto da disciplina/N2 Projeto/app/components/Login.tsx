import Link from "next/link";

const Login = () => {
  return (
    <div id="login" className="login">
      <input type="text" placeholder="Usuário" />
      <input type="password" placeholder="Senha" />
      <Link href="/pagina3">
        <button>Entrar</button>
      </Link>
    </div>
  );
};

export default Login;
