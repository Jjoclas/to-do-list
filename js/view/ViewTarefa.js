class ViewTarefa{
    constructor(){
        
        this.tabela = document.querySelector('tbody');
       
    }
    template (array, estado){
        
        //adiciona as tarefas na tabela
        array.map((tarefa) =>{
                //testando se a tarefa deve ser exibida de acordo com seu status
                if( tarefa.status === estado){
                    // criando elementos da tabela
                    let linha = this.tabela.insertRow(0);
                    let task = linha.insertCell(0);
                    let botoes = linha.insertCell(1);

                    task.innerHTML = this.criaTarefa(tarefa);
                    //criando o btn ok
                    let btnOK = document.createElement('button')
                    btnOK.innerHTML = `<span class="glyphicon glyphicon-ok icone-ok" aria-hidden="true"></span>`;
                    btnOK.classList.add('btn', 'btn-default', `btn-ok`)
                    btnOK.onclick = function() {
                        controller.conclui(event, tarefa);
                    }
                    //criando btn remove
                    let btnRemove = document.createElement('button')
                    btnRemove.innerHTML = `<span class="glyphicon glyphicon-remove icone-remove" aria-hidden="true"></span>`;
                    btnRemove.classList.add('btn', 'btn-default', `btn-remove`)
                    btnRemove.onclick = function(event) {
                        controller.remove(event, tarefa)
                        console.log("remove", tarefa);
                    }
                    // adicionando os btn no DOM
                    if(!tarefa.status){
                        botoes.appendChild(btnOK);
                    }
                    botoes.appendChild(btnRemove);
    
                }
            }).join('');
    }
    criaTarefa(tarefa){
        return `<td class='col-lg-8 col-md-8 col-xs-8' id='td-item'>
        ${tarefa.item} 
        <i class='classes'>
        ${tarefa.classe}
        </i>
        </td>`
    }
    criabtn(tarefa, tipo){
        
        this.botao.innerHTML = `<span class="glyphicon glyphicon-${tipo} icone-${tipo}" aria-hidden="true"></span>`;
        this.botao.classList.add('btn', 'btn-default', `btn-${tipo}`)
        this.botao.onclick = function() {
            console.log("to aqui no onclick", tarefa);
        }
        console.log(this.botao)
        
    }
    update(lista , estado){
        this.tabela.innerHTML = '';
        this.template(lista, estado);
 
    }
    mudancaStatus(event){

        event.target.parentNode.parentNode.classList.add("fadeOut" , 'concluido', '.efeitoOk');
    }

}
