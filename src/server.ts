import express from 'express';

const app = express();

app.use(express.json());

app.get('/users', (request, response) => {
    response.json({
        user1: 2
    })
});

app.post('/users', (request, response) => {
    const data = request.body;
    const user = { name: data.name, password: data.password }

    return response.json(user);
});

app.listen(3333);