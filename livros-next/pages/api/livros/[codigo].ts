import { controleLivro } from ".";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === "DELETE") {
            const {codigo} = req.query;
            controleLivro.excluir(Number(codigo));
            res.status(200).json({message: "Livro excluído com sucesso!"});
        }
        else {
            res.setHeader("Allow", ["DELETE"]);
            res.status(405).end(`Método ${req.method} não permitido`)
        }
    }
    catch (erro) {
        res.status(500).json({message: "Exceção ocorrida no servidor"});
    }
}
