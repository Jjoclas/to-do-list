class ControllerTarefa{
    constructor(){
        
        this.item = document.querySelector('#item');
        this.classe = document.querySelector('#myInput');
        this.status = false;

        this.view = new ViewTarefa();
        this.lista = new ListaTarefas();

        //executa on document ready
        HelperTable.filtra('#myInput','.dropdown-menu li');
        HelperTable.trocaClasse();
        this.importaLista(this.lista.listaExemplo,'lista/exemplos')
  
        
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
    concluiTarefa(event, tarefa){
        tarefa.status = true;

        event.target.parentNode.parentNode.classList.add('efeitoOk',"fadeOut" , 'concluido');
        console.log(event);
        setTimeout(()=>{
            this.view.update(this.lista._lista, false);
        },500);
    }
    
    removeTarefa(event, tarefa){

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
    limpaLista(){
        this.lista.limpaLista();
        this.view.update(this.lista._lista)
    }
    importaLista(tipo, path){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', path);
        xhr.onreadystatechange = () => {
            if(xhr.readyState ==4){
                if(xhr.status == 200){
                    this.lista.addArray(JSON.parse(xhr.responseText), 'exemplo')
                    this.view.update(tipo, false);
                }else{
                    console.log('erro')
                }
            }
        }
        xhr.send()
    }
}
