import ControleEditora from "@/classes/controle/ControleEditora";
import { NextApiRequest, NextApiResponse } from "next";

export const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method == "GET") {
            const editoras = controleEditora.getEditoras();
            res.status(200).json(editoras);
        }
        else {
            res.setHeader("Allow", ["GET"]);
            res.status(405).end(`Método ${req.method} não permitido`);
        }
    }
    catch (erro) {
        res.status(500).json({message: "Exceção ocorrida no servidor"});
    }
}
