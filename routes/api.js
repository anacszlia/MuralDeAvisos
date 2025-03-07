//duas rotas,uma para buscar todos os posts e outra para adicionar um novo post no mural de avisos
//post teste
const express=require('express');
const router=express.Router();
const bodyparser=require('body-parser')
const posts = require('../model/posts')
const cors =require("cors");

//fazer um gateway
const options={
	origin:"http://localhost:3000"
}

router.use(cors(options));
//ler os dados já adicionados,rota get
router.get("/all",(req,res)=>{
	res.json(JSON.stringify(posts.getAll()));
});

//salvar os novos dados,rota post
router.post("/new",bodyparser.json(),(req,res)=>{
	let title =req.body.title;
	let description=req.body.description;

	posts.newPost(title,description);
	//adicionar uma nova resposta
	res.send("Post adicionado");
});

module.exports=router;
