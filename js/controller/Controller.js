class ControllerTarefa{
    constructor(){
        
        this.item = document.querySelector('#item');
        this.classe = document.querySelector('#myInput');
        this.status = false;

        this.view = new ViewTarefa();
        this.lista = new ListaTarefas();
        
    }
    _adiciona(){
        let tarefa = new Tarefa(this.item.value, this.classe.value);
        this.lista.adicionaTarefa(tarefa);
        this.view.update(this.lista._lista, false);
        HelperTable.limpaInput();
    }
    filtraStatus(status){
        this.view.update(this.lista._lista, status);
    }
    conclui(event, tarefa){
        tarefa.status = true;

        event.target.parentNode.parentNode.classList.add('efeitoOk',"fadeOut" , 'concluido');
        console.log(event);
        setTimeout(()=>{
            //this.view.update(this.lista._lista, false);
        },500);
    }
    
    remove(event, tarefa){

        this.lista.getTarefas().map((element,index) => {
            if(element == tarefa){
                this.lista._lista.splice(index,1);
            }
        });

        event.target.parentNode.parentNode.classList.add("fadeOut");
        setTimeout(()=>{
            this.view.update(this.lista._lista, false);
        },500);
    }
}
