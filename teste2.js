const { Servico } = require('./models')

async function app() {
    /**
        const novoServico = await Servico.create({
        imagem: 'onoinonon',
        nome: "Banho",
        descricao: "Um banho top",
        valor: 40
    })
    console.log('id do servico criado:' + novoServico.id)
    **/
   const servico = await Servico.findByPk(2)
   console.log("nome do servico: " + servico.nome)
}

app()