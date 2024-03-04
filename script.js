const express =
require('express');
const app = express ();
const bodyParser =
require('body-parser');

/** Middleware para fazer o parsing do corpo das solicitações */
app.use(bodyParser.json());

let contadorDevisitas = 0;

/** Rota para obter o contador de visitas */
app.get('/contador', (req, res) => {
    res.json({ contador:
    contadorDevisitas });
});

/** Rota para incrementar o contador de visitas */
app.post('/contador', (req, res) => {
    contadorDevisitas++;
    res.sendStatus (200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});