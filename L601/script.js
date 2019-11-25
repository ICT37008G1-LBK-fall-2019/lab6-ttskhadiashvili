var c = prompt("შეიყვანეთ რიცხვი 1-დან 4-მდე")

function getAllElementsWithAttribute(attribute) {

    var allElements = document.getElementsByTagName('div');
    for (var i = 0, n = allElements.length; i < n; i++) {
        if (allElements[i].getAttribute(attribute) === c) {

            allElements[i].style.backgroundColor = "green";
        }
    }

}

getAllElementsWithAttribute('data-student-id');