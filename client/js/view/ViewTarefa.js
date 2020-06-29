class ViewTarefa{
    constructor(){
        
        this.tabela = document.querySelector('tbody');
        this.ul = document.querySelector('ul');
       
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
                    //Adicionando atributos
                    btnOK.setAttribute('data-toggle', 'tooltip')
                    btnOK.setAttribute('tittle', 'Concluir tarefa')
                    btnOK.setAttribute('data-placement', 'top')
                    
                    btnOK.onclick = function() {
                        controller.concluiTarefa(event, tarefa);
                    }
                    //criando btn remove
                    let btnRemove = document.createElement('button')
                    btnRemove.innerHTML = `<span class="glyphicon glyphicon-remove icone-remove" aria-hidden="true"></span>`;
                    btnRemove.classList.add('btn', 'btn-default', `btn-remove`)
                    //Adicionando atributos
                    btnOK.setAttribute('data-toggle', 'tooltip')
                    btnOK.setAttribute('tittle', 'Concluir tarefa')
                    btnOK.setAttribute('data-placement', 'top')
                    
                    btnRemove.onclick = function(event) {
                        controller.removeTarefa(event, tarefa)
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
        <i>
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
    atualizaClasses(array){
        //atualiza as classes no dropdown menu
        this.ul.innerHTML = '';
        
        //cria um array sem valores repetidos
        
        let repetido = [];
        array.map(tarefa=>{
            repetido.push(tarefa.classe);
        });
        
        let unico = new Set(repetido);
        
        //retorna a string a ser adicionada no DOM
        return [...unico].map(classe =>{
            return `<li><a id='dropdown'>${classe}</a></li>`;
        }).join('');

    }

    filtroClasses(ativo){
        //filtra as tarefas atraves de cliques no <li>
        let classes = document.querySelectorAll('i')
        classes.map(classe =>{
            if (classe != ativo){
                classe.parentNode.parentNode.style.display = 'none'
            }
        });
    }
    update(lista , estado){
        this.tabela.innerHTML = '';
        this.template(lista, estado);
        this.ul.innerHTML = this.atualizaClasses(lista);
        HelperTable.trocaClasse()
    }
    mudancaStatus(event){

        event.target.parentNode.parentNode.classList.add("fadeOut" , 'concluido', '.efeitoOk');
    }

}
