class ViewTarefa{
    constructor(){
        this.elemento = document.querySelector('tbody');
    }
    template (array){
        return array.lista.map(tarefa =>{
            return `
            <tr class='linhas-tabela'>
                <td class='col-lg-8 col-md-8 col-xs-8' id='td-item'>
                    ${tarefa.item} 
                    <i class='classes'>
                        ${tarefa.classe}
                    </i>
                </td>
                <td>
                    <button type="button" class="btn btn-default btn-ok ">
                        <span class="glyphicon glyphicon-ok icone-ok" aria-hidden="true"></span>
                    </button>
                    <button type="button" class="btn btn-default btn-remove">
                        <span class="glyphicon glyphicon-remove icone-remove" aria-hidden="true"></span>
                    </button>
                </td>
            </tr>`

    }).join('');
}
    update(lista){
        this.elemento.innerHTML = this.template(lista);
    }
    toggleStatus(array, status){
        array.lista.map(tarefa => { 
            if(status & tarefa.style.display){
                tarefa.toggle();
            }
        });
    }
}