//const listItemElements = document.querySelectorAll('li');

const h1 = document.getElementById('main-title');
h1.textContent = 'Some new title!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.createElement('li: last-of-type');
li.textContent = listItemElements.textContent + '(Changed)';

const body = document.body;
body.querySelector('ul').appendChild(li);

const listItemElements = document.getElementsByTagName('li');
for( const listItemEl of listItemElements){
    console.dir(listItemEl);
}