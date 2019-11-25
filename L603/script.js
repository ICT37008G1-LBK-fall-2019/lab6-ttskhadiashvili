function remChild() {
    var div1 = document.getElementById("container");
    while (div1.hasChildNodes()) {
  div1.removeChild(div1.firstChild);
  }
  }