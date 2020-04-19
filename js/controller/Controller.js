class ControllerTarefa{
    constructor(){
        this.item = $('#item').text();
        this.classe = $('#myInput');
        this.status = true;
    }
    _adiciona(){
        item = this.item;
        classe = this.classe;
        status = this.status;
        let view = new ViewTarefa();
        view.template(item, classe, status);
    }
}
