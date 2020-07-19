
const express = require ('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')


app.engine('handlebars', handlebars({ extname: 'handlebars', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/' }))
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//Rotas

app.get('/', function(req,res){
    Post.findAll().then(function(posts){
        res.render('home', {posts: posts})
    })
})

app.get('/cad', function(req, res){
    res.render('formulario.handlebars')
})

app.post('/add', function(req, res){
    
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    })
    .then(function(){
        res.redirect('/')
    })
    .catch(function(erro){
        res.send("Houve um erro: " + erro)
    })

})

app.get('/delete/:id', function(req,res){
    Post.destroy({where: {'id': req.params.id}})
    .then(function(erro){
        res.redirect('/')
    })
    .catch(function(erro){
        res.send("Ocorreu um erro: " + erro)
    })
})

app.listen(8081, function(){
    console.log("Servidor online na porta 8081.")
})


