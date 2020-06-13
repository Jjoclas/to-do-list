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
        this.importaLista('lista/exemplos', this.lista.listaExemplo)
  
        
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
            // remove o objeto no array de acordo com a tarefa no DOM
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
    importaLista(path='lista/tarefasSalvas', lista=this.lista._lista){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', path);
        xhr.onreadystatechange = () => {
            if(xhr.readyState ==4){
                if(xhr.status == 200){
                    //testa se a lista adicionada é a de exemplos
                    if (path == 'lista/exemplos'){
                        
                        this.lista.addExemplos(JSON.parse(xhr.responseText))
                        this.view.update(lista, false);
                    }else{

                    this.lista.importaLista(JSON.parse(xhr.responseText))
                    console.log(this.lista.getTarefas())
                    this.view.update(lista, false);
                    }
                }else{
                    console.log('erro')
                }
            }
        }
        xhr.send()
    }
    exportaLista() {

            let xhr = new XMLHttpRequest();
            xhr.open("POST", 'lista/salvarTarefa', true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {

                    if (xhr.status == 200) {

                        console.log('deu certo')
                    } else {

                        console.log('deu errado')
                    }
                }
            };
            xhr.send(JSON.stringify(this.lista._lista)); // usando JSON.stringifly para converter objeto em uma string no formato JSON.
        
        }
}
