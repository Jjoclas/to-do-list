/* Código simplório, apenas para fornecer o serviço para a aplicação */

var api = require('../api');

module.exports  = function(app) {
    
    app.route('/lista/exemplos')
        .get(api.listaExemplo);
      
    app.route('/lista/salvarTarefa')
        .post(api.salvaTarefas);
     
    app.route('/lista/tarefasSalvas')
        .get(api.returnTarefas)
};