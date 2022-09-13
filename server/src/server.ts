import express from 'express'

const app = express();

app.get('/', (request, response) => {
    response.json([
        {id: 2, name: 'rafael'},
        {id: 7, name: 'kanban'},
        {id: 3, name: 'OBS'},
        {id: 23, name: 'Postman'},
    ])
})

app.listen(3333)