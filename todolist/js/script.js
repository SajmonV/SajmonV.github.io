document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#addBtn').onclick = newElement;
    let myNodelist = document.querySelectorAll("#myUl li")

    myNodelist.forEach(li => {
        updateListItem(item);
    });

    function newElement() {
        console.log(this)
    }

    function updateListItem(li) {
        let span = document.createElement('span');
        let txt = document.createTextNode('\u00D7');
        span.className = "close";
        span.onclick = function () {
            this.parentElement.style.display = "none";
        }
        span.appendChild(txt);
        item.appendChild(span);
        li.onclick = function () {
            this.classList.toggle("checked");
        }
    }
});

