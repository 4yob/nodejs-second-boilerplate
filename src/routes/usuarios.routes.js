import { Router } from "express";

const usuariosRoutes = Router();

let usuarios = [

]

// Rota para listar todos os usuários
usuariosRoutes.get("/", (req, res) => {
    return res.status(200).json({
        message: usuarios.length == 0 ? "Não há usuários cadastrados!" : `Total de usuários: ${usuarios.length}`,
    });
  });

export default usuariosRoutes;