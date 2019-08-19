const mongoose = require('mongoose');

const ProjetoSchema = new mongoose.Schema({
    titulo: String,
    areaPrincipal: String,
    tipoAcao: String,
    local: String,
    resumo: String,
    publicoAlvo: String,
    vagas: {
        total: Number,
        ocupadas: Number
    },
    equipe: [String],
    imagens: [String]
});

const Projeto = mongoose.model('Projeto', ProjetoSchema);

module.exports = {
    Projeto: Projeto
};