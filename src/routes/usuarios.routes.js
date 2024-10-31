import { Router } from "express";
import UsersRepository from "../models/users/UsersRepository.js";

const usuariosRoutes = Router();
const usersList = new UsersRepository();

// Rota para listar todos os usuários
usuariosRoutes.get("/", (req, res) => {
  const usuarios = userslist.getAllUsers();

  return res.status(200).json({
    message: usuarios.length == 0 ? "Não há usuários cadastrados!" : `Total de usuários: ${usuarios.length}`,
  });
});

// Rota para criar um novo usuário
usuariosRoutes.post("/", (req, res) => {
  const { nome, email, password } = req.body

  const user = usersList.addUser(nome, email, password);
  return res.status(201).json({
    message: "Usuário criado com sucesso!",
    user,
  })
})

export default usuariosRoutes;