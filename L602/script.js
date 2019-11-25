function insertAfter() {
    var newDiv = document.createElement('div');
    newDiv.innerHTML = 'added line';

    container.insertBefore(newDiv, container.lastChild);
}

insertAfter()