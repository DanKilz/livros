import { controleEditora } from ".";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === "GET") {
            const {codEditora} = req.query;
            const nomeEditora = controleEditora.getNomeEditora(Number(codEditora));

            if (nomeEditora) {
                res.status(200).json({nome: nomeEditora});
            }
            else {
                res.status(404).json({message: "Editora não encontrada"});
            }
        }
        else {
            res.setHeader("Allow", ["GET"]);
            res.status(405).end(`Método ${req.method} não permitido`)
        }
    }
    catch (erro) {
        res.status(500).json({message: "Exceção ocorrida no servidor"});
    }
}