// Obtener referencia al formulario y la lista de tareas
const addTaskForm = document.getElementById('addTaskForm');
const taskList = document.getElementById('taskList');

// Evento para agregar tarea
addTaskForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de la tarea y prioridad
    const taskDescription = document.getElementById('taskDescription').value;
    const taskPriority = document.getElementById('taskPriority').value;

    // Crear un nuevo elemento de lista para la tarea
    const taskItem = document.createElement('li');
    taskItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    
    // Crear un span con la descripción de la tarea
    const taskText = document.createElement('span');
    taskText.classList.add('task-text');
    taskText.textContent = taskDescription;

    // Crear el botón de eliminar
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Eliminar';
    
    // Evento para eliminar la tarea
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(taskItem);
    });

    // Añadir el texto de la tarea y el botón al elemento de lista
    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteBtn);

    // Añadir la tarea a la lista de tareas
    taskList.appendChild(taskItem);

    // Limpiar los campos del formulario
    document.getElementById('taskDescription').value = '';
    document.getElementById('taskPriority').value = '';
});


