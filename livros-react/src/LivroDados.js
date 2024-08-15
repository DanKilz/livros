import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ControleLivro from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";

const LivroDados = () => {
    const controleLivro = new ControleLivro();
    const controleEditora = new ControleEditora();

    const opcoes = controleEditora.getEditoras().map(
        (editora) => ({
            value: editora.codEditora,
            text: editora.nome,
        })
    );

    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");
    const [codEditora, setCodEditora] = useState(opcoes?.value || 0);

    const navigate = useNavigate();

    const tratarCombo = (evento) => {
        setCodEditora(Number(evento.target.value));
    }

    const incluir = (evento) => {
        evento.preventDefault();

        const novoLivro = {
            codigo: 0,
            titulo: titulo,
            resumo: resumo,
            autores: autores.split("\n"),
            codEditora: codEditora
        }

        controleLivro.incluir(novoLivro);
        navigate("/");
    }

    return (        
        <main className="p-4">
            <h1>Dados do Livro</h1>
            <form onSubmit={incluir}>

                <div className="mb-3">
                    <label className="form-label">Título</label>
                    <input type="text" className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Resumo</label>
                    <textarea className="form-control" value={resumo} onChange={(e) => setResumo(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Editora</label>
                    <select className="form-select" value={codEditora} onChange={tratarCombo}>
                        {opcoes.map((opcao) => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.text}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Autores (um por linha)</label>
                    <textarea className="form-control" value={autores} onChange={(e) => setAutores(e.target.value)}/>
                </div>

                <button type="submit" className="btn btn-primary">Salva Dados</button>

            </form>
        </main>
    );
}

export default LivroDados;