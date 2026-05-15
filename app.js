import express from 'express';
import fs from 'fs';

const app = express();

app.use(express.json());

const PORT = 3000;

const users = JSON.parse(fs.readFileSync('./users.json', {
    encoding: 'utf-8',
}))

const saveUser = (users) => {
    fs.writeFileSync('./users.json', JSON.stringify(users, null, 2))
}

app.get('/users', (req, res) => {
    return res.json(users)
});

app.post('/users', (req, res) => {
    const { name, age, email } = req.body;

    if (!name || !age || !email) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
    }

    if (users.find(user => user.email === email)) {
        return res.status(400).json({ message: 'Email já cadastrado!' })
    }

    const id = (new Date()).getTime();

    users.push({
        id,
        name,
        age,
        email
    })

    saveUser(users);

    return res.status(201).json({ message: 'Usuário cadastrado com sucesso!' })
})

app.put('/users/:id', (req, res) => {
    const { id } = req.params;

    const { name, age, email } = req.body;

    const user = users.find(user => user.id === Number(id))

    if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado!' });
    }

    if (users.find(user => user.email === email && user.id !== id)) {
        return res.status(400).json({ message: 'Email já cadastrado!' })
    }

    name && (user.name = name);
    age && (user.age = age);
    email && (user.email = email);

    saveUser(users)

    return res.status(200).json({ message: 'Usuário atualizado com sucesso!' })
})

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    const user = users.find(user => user.id === Number(id));

    if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado!' });
    }

    const filteredUsers = users.filter(user => user.id !== Number(id));

    saveUser(filteredUsers);

    return res.status(200).json({ message: 'Usuário deletado com sucesso!' })
})

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta http://localhost:${PORT}`);
});