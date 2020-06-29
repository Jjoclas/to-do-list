class TarefaService{
    constructor(){
        this._http = new HttpService();
        this.lista = new ListaTarefas();
        this.view = new ViewTarefa();
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

