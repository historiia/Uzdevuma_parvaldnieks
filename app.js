const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('the-list')

function addTask() {
    if(inputBox.value === ''){ // Pārbauda vai ir ievadīta informācija info laukā.
        alert("Lūdzu ievadiet tekstu, pirms to pievienojiet!")
    }

    else { // li pievienošana ul
        let li = document.createElement('li') //Izveido li elementu
        let checkIcon = document.createElement('i') //Izveido i elementu
        checkIcon.classList.add('fa', 'fa-check')
        li.appendChild(checkIcon) //Pievieno i pie li elementa
        let taskText = document.createTextNode(inputBox.value)
        li.appendChild(taskText)
        let span = document.createElement("span") // Izveido X ikonu
        span.innerHTML = '\u00d7'
        li.appendChild(span)
        listContainer.appendChild(li)
    }
    inputBox.value = ""
    saveData()
}

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI' || e.target.classList.contains('fa-check')) { //Atzīmē elementu
        let li = e.target.tagName === 'LI' ? e.target : e.target.parentElement;
        li.classList.toggle('checked');
        saveData() //Saglabā izzmaiņas
    } else if (e.target.tagName == 'SPAN') { // Noņem elementu
        e.target.parentElement.remove();
        saveData() //Saglabā izmaiņas
    }
}, false);

function saveData() { // Datu saglabāšana local storage
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() { // Datu atgriežšana no local storage
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()