"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Menu from "../components/menu";
import styles from "../components/menu.module.css";

export default function Pagina2() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:3001/items"); // Alterado para a porta 3001
        const newData = await res.json();
        setData(newData);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Menu />
      <p></p>
      <h1>Dados da API Local</h1>
      {data && Array.isArray(data) ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Carregando dados...</p>
      )}
      <Link href="/">Voltar</Link>
    </>
  );
}
