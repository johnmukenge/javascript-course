//const listItemElements = document.querySelectorAll('li');

const h1 = document.getElementById('main-title');
h1.textContent = 'Some new title!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.createElement('li: last-of-type');
li.textContent = listItemElements.textContent + '(Changed)';

const body = document.body;
body.querySelector('ul').appendChild(li);

const ul = document.querySelector('ul');
ul.querySelectorAll('li');
ul.children[1]; // select the second li element
ul.children; // select all li elements (select child elements nodes only)
ul.childNodes; // select all child nodes (select child elements nodes and text nodes: like lines break and white space)

const listItemElements = document.getElementsByTagName('li');
for( const listItemEl of listItemElements){
    console.dir(listItemEl);
}