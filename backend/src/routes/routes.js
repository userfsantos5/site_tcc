import { createUser, findAll  } from "../controller/userController.js";
import { createContato, findAllContatos } from "../controller/contatoController.js";
import express from "express";

const router = express.Router();

router.post("/user", createUser);
router.get("/listarUser", findAll);

router.post("/contatos", createContato);  
router.get("/contatos", findAllContatos); 


export { router };
