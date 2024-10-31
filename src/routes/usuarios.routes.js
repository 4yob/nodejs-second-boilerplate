import { Router } from "express";
import UsersRepository from "../models/users/UsersRepository.js";

const usuariosRoutes = Router();
const userslist = new UsersRepository();



// Rota para listar todos os usuários
usuariosRoutes.get("/", (req, res) => {
  const usuarios = userslist.getAllUsers();
  
    return res.status(200).json({
        message: usuarios.length == 0 ? "Não há usuários cadastrados!" : `Total de usuários: ${usuarios.length}`,
    });
  });

export default usuariosRoutes;