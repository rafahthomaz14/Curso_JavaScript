//função que adiciona
function addTask(){
    //titulo da tarefa
    const taskTitle = document.querySelector('#task-title').value

    if(taskTitle){
        //clonar o template
        const template = document.querySelector('.template')

        const newTask = template.cloneNode(true)
        //adicionar titulo
        newTask.querySelector('.task-title').textContent = taskTitle

        //remover as classes desnecessaria
        newTask.classList.remove('template')
        newTask.classList.remove('hide')

        //adiciona a tarefa na lista
        const list = document.querySelector('#task-list')
        list.appendChild(newTask)


        //adicionar o evento remover
        const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function(){
            removeTask(this)
        })

        //adicionar evento de concluido
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function(){
            completeTask(this)
        })

        //limpar texto
        document.querySelector('#task-title').value = ""
    }
}

//funçao de remover tarefa
function removeTask(task){
    task.parentNode.remove(true)
}

//funcao de completar tarefa
function completeTask(task){
    const taskToComplete = task.parentNode

    taskToComplete.classList.toggle('done')
}


//evento para adicionar tarefa
const addBtn = document.querySelector('#add-btn')

addBtn.addEventListener('click', function(e){

    e.preventDefault()

    addTask()
})