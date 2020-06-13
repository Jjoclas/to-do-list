class ListaTarefas{
    constructor(){
        this._lista = [];
        this.listaExemplo = [];
    }

    adicionaTarefa(tarefa){
            this._lista.push(tarefa)
    }
    getTarefas(){
        return this._lista;
    }
    limpaLista(){
        this._lista= [];
    }
    addArray(array){
        array.forEach(tarefa => {
            this.adicionaTarefa(tarefa);
        });
    }
    importaLista(lista){
        this._lista = lista;
    }
    addExemplos(array){
        array.forEach(tarefa =>{
            this.listaExemplo.push(tarefa);
        })
    }
}