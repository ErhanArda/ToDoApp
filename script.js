let items = ['item 1', 'item 2', 'item 3', 'item 4']

let list = document.getElementById('myList');

items.forEach(function (item) {

    createItem(item);

});

list.addEventListener('click', function (item) {
    if (item.target.tagName = 'li') {
        item.target.classList.toggle('checked')
    }
})

document.getElementById('btnCreate').onclick = function () {
    let item = document.getElementById('txtItem').value;
    if (item === '') {
        alert('please enter a value');
        return;
    }
    createItem(item);
}



function createItem(item) {
    let li = document.createElement('li');
    let t = document.createTextNode(item);

    li.className = 'list-group-item';
    li.appendChild(t);

    list.appendChild(li);

    let span = document.createElement('span');
    let text = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(text);
    li.appendChild(span);

    span.onclick = function () {
        let li = this.parentElement;
        li.style.display = 'none';
    }
}