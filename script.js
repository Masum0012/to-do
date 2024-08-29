const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')
const messageBox = document.getElementById('message-box')


function addTask(){
    if(inputBox.value === ''){
        // alert('You must write something')
        showMessage('You must write something')
    } else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)



        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }

inputBox.value = ''
saveDate()
}


listContainer.addEventListener('click', function(event){
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked')
        saveDate()
    } else if(event.target.tagName === 'SPAN'){
        event.target.parentElement.remove()
        saveDate()
    }
})


function showTask (){
    listContainer.innerHTML = localStorage.getItem('data')
}

function saveDate (){
    localStorage.setItem('data', listContainer.innerHTML)
}



function showMessage (message){
    messageBox.innerHTML = message
    messageBox.style.display = 'block'

    setTimeout(() => {
        messageBox.style.display = 'none'
    },3000)
}

showTask()

