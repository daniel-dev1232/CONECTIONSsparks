require("dotenv").config(); //pedindo pra usar as informações contidas no arquivo .env

const express = require("express"); //pede para usar a biblioteca express, salvando ela na variável express
const expressLayout = require("express-ejs-layouts") //mesma coisa de cima, mas pro EJS

//const connectDB = require("./server/db");

const app = express();
const PORTA = 8081 || process.env.PORTA; //define a porta de conexão como local (8081) ou qualquer que seja a do host (process.env)

// Conectar ao banco de dados mongol
//connectDB();

// POST das informações do front-end
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//lying my way from YOUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU

app.use(express.static("public")); //vamos usar como static os arquivos presentes na pasta public.

// Middleware da template engine (informações que a EJS vai precisar)
app.use(expressLayout);
app.set("layout", "./layouts/main"); //define o modelo padrão como o main.ejs (header>body>footer)
app.set("view engine", "ejs"); //define a EJS como engine de visualização padrão, daora

app.use("/", require("./server/rotas/main")); //dizemos que vamos usar as rotas presentes no arquivo main.js, isso evitar ter que definir todas as rotas aqui

app.listen(PORTA, () => { //inicia o servidor como web app, usando o express!
    console.log(`{ @ }Servidor aberto na porta ${PORTA}`);
})