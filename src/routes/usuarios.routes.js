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
  const { name, email, password } = req.body

  const user = usersList.addUser(name, email, password);
  return res.status(201).json({
    message: "Usuário criado com sucesso!",
    user,
  });
});

// Rota para buscar um usuário pelo ID
usuariosRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

  const user = usersList.getUserById(id)

  if (!user) {
    return res.status(404).json({
      message: `Usuário de ID ${id} não identificado!`
    })
  }

  return res.status(200).json({
    message: `Usuário de ID ${id} identificado!`,
    user,
  })
});

// Rota para editar um usuário
usuariosRoutes.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  const user = usersList.updateUser(id, name, email, password);

  if (!user) {
    return res.status(404).json({
      message: `Usuário de ID ${id} não encontrado!`,
    });
  }

  return res.status(200).json({
    message: `Usuário de ID ${id} atualizado com sucesso!`,
    user,
  });

});

// Rota para deletar um usuário
usuariosRoutes.delete("/:id", (req, res) => {

});

export default usuariosRoutes;