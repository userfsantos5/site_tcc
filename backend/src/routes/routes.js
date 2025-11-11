import { createUser, findAll  } from "../controller/loginController.js";
import { createContato, findAllContatos } from "../controller/contatoController.js";
import { 
  createPostagem, 
  findAllPostagens, 
  findPostagemById, 
  updatePostagem, 
  deletePostagem,
  findPostagensPublicas,
  findEbooks,
  findArtigos,
  findBlogPosts,
  findPostagemBySlug
} from "../controller/postagemController.js";
import { 
  verificarSenha, 
  verificarEmail,
  getEstatisticas
} from "../controller/ferramentasController.js";
import express from "express";

const router = express.Router();

router.post("/user", createUser);
router.get("/listarUser", findAll);

router.post("/contatos", createContato);  
router.get("/contatos", findAllContatos); 

router.get("/postagens/publicas", findPostagensPublicas);
router.get("/postagens/ebooks", findEbooks);
router.get("/postagens/artigos", findArtigos);
router.get("/postagens/blog", findBlogPosts);
router.get("/postagens/:slug", findPostagemBySlug);

router.post("/admin/postagens", createPostagem);
router.get("/admin/postagens", findAllPostagens);
router.get("/admin/postagens/:id", findPostagemById);
router.put("/admin/postagens/:id", updatePostagem);
router.delete("/admin/postagens/:id", deletePostagem);

router.post("/ferramentas/verificar-senha", verificarSenha);
router.post("/ferramentas/verificar-email", verificarEmail);
router.get("/ferramentas/estatisticas", getEstatisticas);

export { router };