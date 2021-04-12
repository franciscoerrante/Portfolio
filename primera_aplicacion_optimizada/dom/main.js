const todos = [];
window.onload = () => {
    // guardamos la referencia del formulario
    const form = document.getElementById('todo-form');
    // reemplazar el evento de on en submit y debera ir a buscar el elemento
    form.onsubmit = (e) => {
        //esto evitara que la aplicacion se refresque y seguir trabajando en la misma pagina
        e.preventDefault();
        // vamos a buscar el todo
        const todo = document.getElementById('todo');
        // buscamos el texto ingresado
        const todoText = todo.value;
        // reemplazamos el elemento y le asignamos el siguiente valor vacio
        todo.value = '';
        // agregamos elementos al arreglo
        todos.push(todoText);
        //vamos a buscar 
        const todoList = document.getElementById ('todo-list');
        // al enviar, limpia el documento para evitar que se repitan los datos
        //todoList.innerHTML = '';
        //recorremos el arreglo.
        //for (let i = 0; i < todos.length; i++) {
            //recorremos el arreglo limpio sin duplicados y concatenamos a los elementos
            // de la lista.
        //    todoList.innerHTML += '<li>'+ todos[i] + '</li>'
        //}
        //con MAP se genera un arreglo de tantos elementos como tenga
        const todosTemplate = todos.map( t => '<li>'+ t + '</li>');
        //limpio los elementos y asi se pueden concatenar al usar innerHTML
        todoList.innerHTML = todosTemplate.join('');

    }
}