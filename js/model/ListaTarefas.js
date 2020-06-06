class ListaTarefas{
    constructor(){
        this._lista = [];
    }

    adicionaTarefa(tarefa){
        this._lista.push(tarefa)
    }

    getTarefas(){
        return this._lista;
    }
}