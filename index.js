var listElement = document.querySelector('#content ul');
var inputElement = document.querySelector('#content input');
var buttonElement = document.querySelector('#content button');

//var tarefas = JSON.parse(localStorage.getItem('list_tarefas')) || [];
var tarefas = JSON.parse(sessionStorage.getItem('list_tarefas')) || [];

function renderTarefas() {
    listElement.innerHTML = '';

    for (tarefa of tarefas) {
        var tarefaElement = document.createElement('li');
        var tarefaText = document.createTextNode(tarefa);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var pos = tarefas.indexOf(tarefa);
        linkElement.setAttribute('onclick', 'deleteTarefa(' + pos + ')');
        
        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        tarefaElement.appendChild(tarefaText);
        tarefaElement.appendChild(linkElement);

        listElement.appendChild(tarefaElement);
    }
}

renderTarefas();

function addTarefa() {
    var tarefaText = inputElement.value;

    tarefas.push(tarefaText);
    inputElement.value = '';
    renderTarefas();
    saveToStorage();
}

buttonElement.onclick = addTarefa;

function deleteTarefa(pos) {
    tarefas.splice(pos, 1);
    renderTarefas();
    saveToStorage();
}

function saveToStorage() {
    //localStorage.setItem('list_tarefas', JSON.stringify(tarefas));
    sessionStorage.setItem('list_tarefas', JSON.stringify(tarefas))
}