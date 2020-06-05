class ControllerTarefa{
    constructor(){
        
        this.item = document.querySelector('#item');
        this.classe = document.querySelector('#myInput');
        this.status = true;

        this.view = new ViewTarefa();
        this.lista = new ListaTarefas();
        
    }
    _adiciona(){
        let tarefa = new Tarefa(this.item.value, this.classe.value);
        this.lista.adicionaTarefa(tarefa);
        this.view.update(this.lista);
        HelperTable.limpaInput();
    }
    filtraStatus(status){
        this.view.toggleStatus(this.lista, status);
    }
    conclui(event, button, tarefa){
        console.log(tarefa)
        console.log(button.tagName, evento.target === button)
        this.view.mudancaStatus(event);
    }
    remove(event, tarefa){
        console.log(this.lista)
        this.lista.lista.map((element,index) => {
            if(element == tarefa){
                this.lista.lista.splice(index,1);
                console.log(index)
                console.log(element)
            }
        });
        console.log(tarefa.status)
        event.target.parentNode.parentNode.classList.add("fadeOut");
        console.log(event.target.parentNode.parentNode.parentNode)
        setTimeout(()=>{
            this.view.update(this.lista);
        },500);
    }
}
