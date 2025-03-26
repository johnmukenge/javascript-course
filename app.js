//const listItemElements = document.querySelectorAll('li');

/*const h1 = document.getElementById('main-title');
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

const liFirst = document.querySelector('ul');
liFirst.parentElement; // select the nearest parent element of the ul element, which is the body element
liFirst.parentNode; // select the nearest parent node of the ul element, which is the body element
liFirst.closest('body'); // select the nearest parent element of the ul element, which is the body element
liFirst.closest('header'); // select the nearest parent element of the ul element, null because the ul element is not inside the header element

ul.previousSibling; // select the previous sibling of the ul element, which is the text node
ul.previousElementSibling; // select the previous sibling element of the ul element, which is the header element
ul.nextSibling; // select the next sibling of the ul element, which is the text node
ul.nextElementSibling; // select the next sibling element of the ul element, which is the script element

const ul1 = document.body.firstChildElement.nextElementSibling; // select the next sibling element of the first child element of the body element, which is the ul element
const firstLi = ul1.firstElementChild; // select the first child element of the ul element, which is the first li element
firstLi.parentElement; // select the nearest parent element of the first li element, which is the ul element


const section = document.querySelector('section'); // select the section element
section.style.backgroundColor = 'green'; // change the background color of the section element to green
const button = document.querySelector('button'); // select the button element

section.className = 'red-bg';*/ // change the class of the section element
const section = document.querySelector('section'); // select the section element
const button = document.querySelector('button'); // select the button element

section.className = 'red-bg';
button.addEventListener('click', () => {
    /*if(section.className === 'red-bg visible'){
        section.className = 'red-bg invisible'; // change the class of the section element
    } else{
        section.className = 'red-bg visible'; // change the class of the section element
    }
    section.className = 'red-bg visible';*/ // change the class of the section element

    //section.classList.toggle('visible');
    section.classList.toggle('invisible');
});


/*const listItemElements = document.getElementsByTagName('li');
for( const listItemEl of listItemElements){
    console.dir(listItemEl);
}*/