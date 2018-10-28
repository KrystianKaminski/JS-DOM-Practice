// 1. Adding item to list

const inputValue = document.querySelector('.input__text');
const inputBtn = document.querySelector('.input__button');
const list = document.querySelector('.list');
const deleteBtn = document.querySelectorAll('.list__item--delete');

const addItem = () => {
    const text = document.createTextNode(inputValue.value);
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.setAttribute('class', 'list__item');
    span.setAttribute('class', 'list__item--delete');
    span.textContent = 'X';
    li.appendChild(text);
    li.appendChild(span);
    list.appendChild(li);
    inputValue.value = "";
}


inputBtn.addEventListener('click', addItem);