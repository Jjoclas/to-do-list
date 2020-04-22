class ListaTarefas{
    constructor(){
        this.lista = [];
    }

    adicionaTarefa(tarefa){
        this.lista.push(tarefa)
    }

    get tarefas(){
        return this.lista;
    }
}