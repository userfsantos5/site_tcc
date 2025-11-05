import { createUser, findAll  } from "../controller/userController.js";
import { createContato, findAllContatos } from "../controller/contatoController.js";
import { createArtigo, findAllArtigos } from "../controller/artigoController.js";
import express from "express";

const router = express.Router();

router.post("/user", createUser);
router.get("/listarUser", findAll);

router.post("/contatos", createContato);  
router.get("/contatos", findAllContatos); 

router.post("/artigos", createArtigo);
router.get("/artigos", findAllArtigos);

export { router };
