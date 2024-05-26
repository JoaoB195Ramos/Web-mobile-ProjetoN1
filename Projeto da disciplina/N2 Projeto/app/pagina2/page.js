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
        const muscle = "biceps"; // Músculo desejado
        const apiKey = "Vkj+8e0oQ92xRb7o7PwmCw==cwweCzv5ztnvOthL"; // Sua chave de API

        const response = await fetch(
          `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`,
          {
            method: "GET",
            headers: {
              "X-Api-Key": apiKey,
              "Content-Type": "application/json",
            },
          },
        );

        if (!response.ok) {
          throw new Error("Erro ao buscar dados da API");
        }

        const newData = await response.json();
        setData(newData);
      } catch (error) {
        console.error("Erro ao carregar os dados da API:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Menu />
      <p>
        Exercises API = The Exercises API provides access a comprehensive list
        of thousands of exercises targeting every major muscle group.
      </p>
      <h1> Exercícios físicos(API Ninjas).</h1>
      {data ? (
        <ul>
          {/* Renderizar os dados da API externa */}
          {data.map((item, index) => (
            <li key={index}>
              <strong>Nome:</strong> {item.name}
              <br />
              <strong>Tipo:</strong> {item.type}
              <br />
              <strong>Musculo:</strong> {item.muscle}
              <br />
              <strong>Equipamento:</strong> {item.equipment}
              <br />
              <strong>Dificuldade:</strong> {item.difficulty}
              <br />
              <strong>Instrucoes:</strong> {item.instructions}
              <br />
              <br />
            </li>
          ))}
        </ul>
      ) : (
        <p>Carregando dados da API externa...</p>
      )}
      <Link href="/">Voltar</Link>
    </>
  );
}
