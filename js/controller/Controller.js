class ControllerTarefa{
    constructor(){
        this.item = $('#item').text();
        this.classe = $('#myInput');
        this.status = true;

        this.view = new ViewTarefa();
    }
    _adiciona(tabela){
        
        $(tabela).innerHTML = view.template(this.item, this.classe, this.status);
        
    }
}
