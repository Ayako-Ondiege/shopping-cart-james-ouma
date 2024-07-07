document.addEventListener('DOMContentLoaded', function(){
    let hardwareItems = document.getElementById('hardware')
    // The variable hardwareItems has stored the form element Id'd as Hardware-Items
    let clearListItems = document.getElementById('clear')

    hardwareItems.addEventListener('submit', addItem) //Submit added as an event listener to the addItem function called
    clearListItems.addEventListener('click', clearList) //Click added as an event listener to the clearList function called

    function addItem (e){
        e.preventDefault();//e is a parameter create. preventDefault is to prevent the form behaving the normal way
        let data = this.elements.itemInput.value;
        //selects the input elements and gets the value of that input element then stores in the data variable. 
        // this.elements.ItemInPut.value refers to accessing the value property of an input element with the id ItemInPut within a form.
        if (!data) return;
        //checks if the data is empty return, if true continue. Checks for validity of input box. 
        // !data checks if the variable data is falsy. In JavaScript, falsy values include false, null, undefined, 0, NaN, and '' (an empty string).
        // return; exits the current function and returns control to the caller immediately. When return; is executed without a value, it effectively stops further execution of the function and any subsequent code within it.

        let list = document.querySelector('ol');
        let item = document.createElement('li');
        let text = document.createElement('p');
        // Targeted three elements 
        text.textContent = data; // <p>Hello</p>
        this.elements.itemInput.value = "";
        //whenever item is added, we set the input box to empty
        //  is used to clear the value of an input field with the id ItemInput within a form. 

        item.append(text); //<li><p></p></li>
        list.append(item);//<ol><li><li><ol>

        let removeButton = document.createElement('span');
        removeButton.textContent = 'x';
        removeButton.classList.add('remove');
        item.append(removeButton);

        removeButton.addEventListener('click', deleteItem);
        item.addEventListener('click', toggleDone);
    }



    function deleteItem(e){
        e.stopPropagation();
        this.parentElement.remove();
    }
    // e.stopPropagation() is called to stop the event from propagating (bubbling up) through the DOM. This prevents any parent event handlers from being executed when this specific event (such as a click) occurs. It ensures that only the intended action (remove() in this case) happens without triggering other event listeners higher up in the DOM hierarchy.
    function toggleDone(e){
        if (e.target.classList.contains('remove')) return;
        this.classList.toggle('done');
    }

    function clearList (){
        let list = document.querySelector('ol');
        list.innerHTML = "";
    }  
});