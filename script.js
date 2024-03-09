$("document").ready(function() {

    $('li').addClass('list-font-size') //
    $('.no-task-text').addClass('task-text');//
    $('.add-task-button').addClass('button-font-size'); //

    var taskList = $(".task-list")

    //document.querySelectort(".task-list")

        // Event handler for the "Add task" button click
    $('.add-task-button').click(function(){
        // Get the text for the new task from user input (you can use an input field here)
        var taskText = prompt("Enter the task:"); 
        
        if (taskText) {
            // Create a new <li> element with the task text, checkbox, and trash icon button
            var newTaskItem = $('<li class="list-group-item"></li>').html(`
                <input type="checkbox" class="form-check-input mr-2 fs-5 mt-1 list-items" id="list_chkbox">
                <label class="ps-2 list-label" for="list_chkbox">${taskText}</label>
            
                <i class="bi bi-trash-fill text-danger float-end delete-task-button"></i>
            `);
            
            newTaskItem.addClass('list-font-size');
            // Append the new <li> element to the task list
            taskList.append(newTaskItem);

            $('.no-task-text').hide();
            
            // Show success message
            alert('Task added successfully!');
        }
    });

    // Event handler for checking/unchecking the checkbox
    taskList.on('change', '.list-items', function(){
        // Toggle the class on the label based on whether the checkbox is checked
        // Check if the checkbox is checked
        if ($(this).prop('checked')) {
            // Apply line-through style to the label
            $(this).next('.list-label').css({"text-decoration": "line-through", color: "green"});
        } else {
            // Remove line-through style from the label
            $(this).next('.list-label').css({"text-decoration": "none", color:"black"});
        }
    });

    // Event handler for the delete task button click
    taskList.on('click', '.delete-task-button', function(){
        // Get the task name from the label of the task item
        var taskName = $(this).closest('li').find('.list-label').text();

        // Ask for confirmation with the task name included in the message
        var confirmation = confirm("Are you sure you want to delete the task '" + taskName + "'?");
        
        if (confirmation) {
            $(this).closest('li').remove();

            // Check if there are no more items left in the list
            if (taskList.children('li').length === 0) {
                // Show the placeholder item
                $('.no-task-text').show();
            }
        }
    });

}) 
