class ViewTarefa{
    constructor(elemento){
        this.elemento = elemento;
    }
    template (item, classe, status){
        return `
        <tr class='linhas-tabela'>
        <td class='col-lg-8 col-md-8 col-xs-8'>
            ${item} <i class='classes'>${classe}</i>
        </td>
        <td>${status}</td>
        </tr>`;

    }
}