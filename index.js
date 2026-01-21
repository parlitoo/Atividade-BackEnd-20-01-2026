import express from "express";
const delicia = express();

const alunos = [
    { 
        id: 1,
        nome: "Paulo", 
        media: 8.0
    },
    { 
        id: 2,
        nome: "Luan Saboroso", 
        media: 8.6
    },
    { 
        id: 3,
        nome: "Xaolin Matador de Porcos", 
        media: 10
    },
    { 
        id: 4,
        nome: "Nazaré", 
        media: 9
    },
    { 
        id: 5,
        nome: "Pedro de Alcântara Francisco António João Carlos Xavier de Paula Miguel Rafael Joaquim José Gonzaga Pascoal Cipriano Serafim de Bragança e Bourbon", 
        media: 10
    }
];

delicia.get("/", (req, res) => {
    res.send("Acesse /alunos para ver a lista de alunos")
});

// rota para buscar todos os alunos
delicia.get("/alunos", (req, res) => {
    res.json(alunos);
});

delicia.get("/alunos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const aluno = alunos.find(i => i.id === id);

    if (!aluno) {
        return res.status(404).json({ erro: 'Aluno não encontrado' });

        res.json(aluno);
    }
})

// porta do servidor
delicia.listen(3000, () => {
    console.log("tudo serto no localhost: http://localhost:3000")
});