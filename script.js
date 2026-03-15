const input = document.getElementById('input');
const ad = document.getElementById('ad');
const lista = document.getElementById('lista');

ad.addEventListener('click', () => {//evento no botão de adicionar
    if (input.value.trim() === '') { //validação
        alert('Você precisa adicionar uma tarefa antes.');
        return;
    }

    //se tem o texto, adiciona o item
    const li = document.createElement('li');//item criado

    const remover = document.createElement('button');//botão de remover cada li

    remover.innerText = '(X)';
    remover.style.marginLeft = '10px';

    //add texto no li
    li.innerText = input.value;
    li.appendChild (remover);//encaixar o botão de excusão
    lista.appendChild (li);//li no ul

    input.value = ''; //limpa o texto do input

    //risco para tarefas concluídas
    li.addEventListener('click', () => {
        li.classList.toggle('concluido');
    });

    //botão de remoção do li
    remover.addEventListener('click', (event) => {
        event.stopPropagation();
        li.remove();
    });
    
});