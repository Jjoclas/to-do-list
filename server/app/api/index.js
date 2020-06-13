/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {}



var Exemplos = [
      { item : 'Estudar Calculo', classe : 'Educação', status : 150},
      { item : 'Finalizar trabalho de Desenvolvimento web', classe : 'Educação', status : false},
      { item : 'Pagar a fatura do cartão', classe : 'Finanças', status : true},
      { item : 'Reunião as 17 horas', classe : 'Trabalho', status : false},
      { item : 'Reunião de pais Sabado', classe : 'Filhos', status : false},
      { item : 'Fazer convites para a festa de aniversario', classe : 'Filhos', status : false},
      { item : 'Reservar um restaurante sexta a noite', classe : 'Relacionamento', status : true},
      { item : 'Pelada as 20 horas', classe : 'Esporte', status : false}
    ];

var Tarefas = [];


api.listaExemplo = function(req, res) {
    var exemplosReturn = Exemplos;
    res.json(exemplosReturn);

}
api.addExemplo = function(req, res) {

   console.log(req.body);
   Exemplos.push(req.body);
   res.status(200).json("Lista recebida");
}
api.returnTarefas = function(req,res) {
    var tarefasReturn = Tarefas;
    res.json(tarefasReturn);
}
api.salvaTarefas = function(req, res) {

    Tarefas = req.body

    res.status(200).json("Lista Salva");
}



module.exports = api;