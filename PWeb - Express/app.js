const express = require("express")
const app = express()
const port = 3000;
const signup = "http://localhost:3000/users/signup";

app.use((req, res, next) => {
    req.requestTime = new Date().toString();
    next();
});

app.get("/", (req, res) => {
    res.send("root")
    console.log("Página 'root' acessada em ("+req.requestTime+").")
})

app.get("/about", (req, res) => {
    res.send("about")
    console.log("Página 'about' acessada em ("+req.requestTime+").")
})

app.post("/data", (req, res) => {
    res.send("data")
    console.log("Página 'data' acessada em ("+req.requestTime+").")
})

app.get("/users", (req, res) => {
    res.send("users")
    console.log("Página 'users' acessada em ("+req.requestTime+").")
})

app.get("/users/signin", (req, res) => {
    console.log("Página 'users/signin' acessada em (" + req.requestTime + ").");
    res.redirect(signup);
});

app.get("/users/signin/:userid", (req, res) => {
    res.send("Bem-vindo "+req.params.userid+"!")
    console.log("Página 'users/signin/:userid' acessada em ("+req.requestTime+").")
})

app.get("/users/signup", (req, res) => {
    res.send("users/signup")
    console.log("Página 'users/signup' acessada em ("+req.requestTime+").")
})

app.use((req, res) => {
    res.status(404).send(`Erro 404 - Página não encontrada ou inexistente, certifique-se que os dados estão preenchidos corretamente. <a href="http://localhost:3000/"> Clique aqui para retornar ao início.`)
})

app.listen(port, () => {
    console.log("Executando na porta " + port)
})