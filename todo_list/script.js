// Obtener referencia al formulario y la lista de tareas
const addTaskForm = document.getElementById('addTaskForm');
const taskList = document.getElementById('taskList');

// Evento para agregar tarea
addTaskForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de la tarea y prioridad
    let taskDescription = document.getElementById('taskDescription').value;
    let taskPriority = document.getElementById('taskPriority').value;

    // Asegurarnos de que la prioridad esté entre 1 y 5
    taskPriority = Math.max(1, Math.min(5, taskPriority)); // Limitar entre 1 y 5

    // Crear un nuevo elemento de lista para la tarea
    const taskItem = document.createElement('li');
    taskItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    
    // Crear un span con la descripción de la tarea
    const taskText = document.createElement('span');
    taskText.classList.add('task-text');
    taskText.textContent = taskDescription;

    // Crear un span con la prioridad de la tarea
    const priorityText = document.createElement('span');
    priorityText.classList.add('task-priority', 'ml-2'); // Agregamos un margen a la izquierda
    priorityText.textContent = `Prioridad: ${taskPriority}`;

    // Crear el botón de eliminar
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Eliminar';
    
    // Evento para eliminar la tarea
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(taskItem);
    });

    // Crear el botón de editar
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn', 'btn', 'btn-warning'); // Estilo amarillo
    editBtn.textContent = 'Editar';

    // Crear el botón de cancelar (inicialmente oculto)
    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-btn', 'btn', 'btn-secondary'); // Estilo gris
    cancelBtn.textContent = 'Cancelar';
    cancelBtn.style.display = 'none'; // Ocultar al principio

    // Crear el botón de guardar
    const saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn', 'btn', 'btn-success'); // Estilo verde
    saveBtn.textContent = 'Guardar';
    saveBtn.style.display = 'none'; // Ocultar al principio

    // Variables para almacenar el valor original de la tarea y la prioridad
    let originalTaskDescription = taskDescription;
    let originalPriority = taskPriority;

    // Variables para almacenar las referencias a los inputs durante la edición
    let inputEdit, inputPriority;

    // Evento para cancelar la edición
    cancelBtn.addEventListener('click', function () {
        // Restaurar el texto original y la prioridad
        taskText.textContent = originalTaskDescription;
        priorityText.textContent = `Prioridad: ${originalPriority}`;

        // Cambiar los botones de vuelta al estado inicial
        editBtn.style.display = 'inline-block';
        cancelBtn.style.display = 'none';
        saveBtn.style.display = 'none';

        // Reemplazar los inputs por los textos originales
        taskItem.replaceChild(taskText, inputEdit);
        taskItem.replaceChild(priorityText, inputPriority);
    });

    // Evento para guardar los cambios
    saveBtn.addEventListener('click', function () {
        // Guardar los cambios realizados
        originalTaskDescription = inputEdit.value; // Actualizamos el valor original
        originalPriority = inputPriority.value; // Actualizamos el valor original

        taskText.textContent = inputEdit.value;
        priorityText.textContent = `Prioridad: ${inputPriority.value}`;

        // Volver a mostrar solo el botón de editar y eliminar
        editBtn.style.display = 'inline-block';
        cancelBtn.style.display = 'none';
        saveBtn.style.display = 'none';

        // Reemplazar los inputs por los textos actualizados
        taskItem.replaceChild(taskText, inputEdit);
        taskItem.replaceChild(priorityText, inputPriority);
    });

    // Evento para editar la tarea
    editBtn.addEventListener('click', function () {
        // Crear un input para que el usuario edite la tarea
        inputEdit = document.createElement('input');
        inputEdit.type = 'text';
        inputEdit.value = taskText.textContent;
        inputEdit.classList.add('input-description'); // Añadimos clase para seleccionarlo luego

        // Crear un input para que el usuario edite la prioridad
        inputPriority = document.createElement('input');
        inputPriority.type = 'number';
        inputPriority.value = priorityText.textContent.replace('Prioridad: ', ''); // Extraer solo el valor de la prioridad
        inputPriority.min = 1; // Establecer el mínimo a 1
        inputPriority.max = 5; // Establecer el máximo a 5
        inputPriority.classList.add('input-priority'); // Añadimos clase para seleccionarlo luego

        // Reemplazar el texto actual por los inputs
        taskItem.replaceChild(inputEdit, taskText);
        taskItem.replaceChild(inputPriority, priorityText);

        // Cambiar los botones de edición a "Guardar" y "Cancelar"
        saveBtn.style.display = 'inline-block';
        cancelBtn.style.display = 'inline-block';
        editBtn.style.display = 'none'; // Ocultar el botón de editar
    });

    // Añadir los elementos (descripción, prioridad, editar, cancelar, guardar, eliminar)
    taskItem.appendChild(taskText);
    taskItem.appendChild(priorityText);
    taskItem.appendChild(editBtn);
    taskItem.appendChild(saveBtn);
    taskItem.appendChild(cancelBtn);
    taskItem.appendChild(deleteBtn);

    // Añadir la tarea a la lista de tareas
    taskList.appendChild(taskItem);

    // Limpiar los campos del formulario
    document.getElementById('taskDescription').value = '';
    document.getElementById('taskPriority').value = ''; // Limpiar el campo de prioridad
});








