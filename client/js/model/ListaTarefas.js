class ListaTarefas{
    constructor(){
        this._lista = [];
        this.listaExemplo = [];
    }

    adicionaTarefa(tarefa, lista=''){
        if(!lista){
            this._lista.push(tarefa)
    
        }else{
            this.listaExemplo.push(tarefa)
        }
    }
    getTarefas(){
        return this._lista;
    }
    limpaLista(){
        this._lista= [];
    }
    addArray(array, tipo=''){
        array.forEach(tarefa => {
            this.adicionaTarefa(tarefa, tipo);
        });
    }
}