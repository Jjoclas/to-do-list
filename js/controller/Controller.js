class ControllerTarefa{
    constructor(){
        this.item = document.querySelector('#item');
        this.classe = document.querySelector('#myInput');
    

        this.view = new ViewTarefa();
        this.lista = new ListaTarefas();
        
    }
    _adiciona(){
        let tarefa = new Tarefa(this.item.value, this.classe.value);
        this.lista.adicionaTarefa(tarefa);
        console.log(this.lista);
        this.view.update(this.lista);
        HelperTable.limpaInput();
    }
    
}
