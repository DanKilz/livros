import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { LinhaLivro } from "@/componentes/LinhaLivro";
import { Menu } from "@/componentes/Menu";
import Livro from "@/classes/modelo/Livro";

const baseURL = "http://localhost:3000/api/livros";

const obter = async () => {
    const resposta = await fetch(baseURL);
    return resposta.json();
}

const excluirLivro = async (codigo: number) => {
    const resposta = await fetch(`${baseURL}/${codigo}`, {method: "DELETE"});
    return resposta.ok;
}

const LivroLista: NextPage = () => {
    const [livros, setLivros] = useState(Array<Livro>);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        if (!carregado) {
            obter().then((dados) => {
                setLivros(dados);
                setCarregado(true);
            })
        }
    });

    const excluir = async (codigo: number) => {
        const sucesso = await excluirLivro(codigo);
        if (sucesso) {
            setCarregado(false);
        }
    }

    return (
        <div className="container-fluid">
            <Head>
                <title>Loja Next | Listagem de Livros</title>
            </Head>

            <Menu />
            
            <main className="main m-3">
                <h1 className="h1 mb-5 mt-4 ">Listagem de Livros</h1>
                <table className="table table-striped ">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Resumo</th>
                            <th>Editora</th>
                            <th>Autores</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro) => (
                            <LinhaLivro key={livro.codigo} livro={livro} excluir={() => excluir(livro.codigo)} />
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}

export default LivroLista;
