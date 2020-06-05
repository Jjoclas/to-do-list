class ViewTarefa{
    constructor(){
        
        this.tabela = document.querySelector('tbody');
       
    }
    template (array){
        
        //adiciona as tarefas na tabela
        array.lista.map((tarefa) =>{
            // criando elementos
            let linha = this.tabela.insertRow(0);
            let task = linha.insertCell(0);
            let botoes = linha.insertCell(1);

            task.innerHTML = this.criaTarefa(tarefa);
            //criando os botões
            let btnOK = document.createElement('button')
            btnOK.innerHTML = `<span class="glyphicon glyphicon-ok icone-ok" aria-hidden="true"></span>`;
            btnOK.classList.add('btn', 'btn-default', `btn-ok`)
            btnOK.onclick = function() {
                console.log("conclui", tarefa);
            }
            botoes.appendChild(btnOK);
            //outro btn
            let btnRemove = document.createElement('button')
            btnRemove.innerHTML = `<span class="glyphicon glyphicon-remove icone-remove" aria-hidden="true"></span>`;
            btnRemove.classList.add('btn', 'btn-default', `btn-remove`)
            btnRemove.onclick = function(event) {
                controller.remove(event, tarefa)
                console.log("remove", tarefa);
            }
            botoes.appendChild(btnRemove);

            
            
           
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
        
        this.botao.innerHTML = `<span class="glyphicon glyphicon-ok icone-${tipo}" aria-hidden="true"></span>`;
        this.botao.classList.add('btn', 'btn-default', `btn-${tipo}`)
        this.botao.onclick = function() {
            console.log("to aqui no onclick", tarefa);
        }
        console.log(this.botao)
        
    }
    update(lista){
        this.tabela.innerHTML = '';
        this.template(lista);
 
    }
    mudancaStatus(event){

        event.target.parentNode.parentNode.classList.add("fadeOut" , 'concluido');
    }
    toggleStatus(array, status){
        array.lista.map(tarefa => { 
            if(status){
                console.log(tarefa)
                tarefa.classList.add("fadeOut")
                setTimeout(function(){
                    event.target.parentNode.remove();  
                },500);
            }
        });
    }
}
