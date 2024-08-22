const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
app.use(bodyParser.json());

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'  // Caminho para o arquivo do banco de dados
});

const Veiculo = sequelize.define('Veiculo', {
    placa: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
    marca: { type: DataTypes.STRING, allowNull: false },
    modelo: { type: DataTypes.STRING, allowNull: false },
    ano: { type: DataTypes.INTEGER, allowNull: false }
});

(async () => {
    await sequelize.sync({ force: true });
    console.log("Modelos sincronizados com o banco de dados.");
})();

app.get('/veiculos', async (req, res) => {
    const veiculos = await Veiculo.findAll();
    res.json(veiculos);
});

app.get('/veiculos/:placa', async (req, res) => {
    const { placa } = req.params;
    const veiculo = await Veiculo.findOne({ where: { placa } });
    if (veiculo) {
        res.json(veiculo);
    } else {
        res.status(404).json({ message: 'Veículo não encontrado.' });
    }
});

app.post('/veiculos', async (req, res) => {
    const { placa, marca, modelo, ano } = req.body;
    try {
        const veiculo = await Veiculo.create({ placa, marca, modelo, ano });
        res.status(201).json({ message: 'Veículo cadastrado com sucesso.', veiculo });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.put('/veiculos/:placa', async (req, res) => {
    const { placa } = req.params;
    const { marca, modelo, ano } = req.body;
    try {
        const [updated] = await Veiculo.update({ marca, modelo, ano }, { where: { placa } });
        if (updated) {
            const updatedVeiculo = await Veiculo.findOne({ where: { placa } });
            res.json({ message: 'Informações do veículo atualizadas com sucesso.', veiculo: updatedVeiculo });
        } else {
            res.status(404).json({ message: 'Veículo não encontrado.' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.delete('/veiculos/:placa', async (req, res) => {
    const { placa } = req.params;
    try {
        const deleted = await Veiculo.destroy({ where: { placa } });
        if (deleted) {
            res.json({ message: 'Veículo excluído com sucesso.' });
        } else {
            res.status(404).json({ message: 'Veículo não encontrado.' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
