import React from 'react'

//Functional form component. State is passed down from app
function Form({inputText, setInputText, todos, setTodos}) {
    //function to manipulate the state. console logging the event that triggered function. Everytime input changes handler function runs
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitToDoHandler = (e) => {
        e.preventDefault();
        //spread operator to add previous todos. random id generated. 
        setTodos([...todos, {text: inputText, completed:false, id: Math.random()*1000}])
        setInputText('')
    }
    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitToDoHandler} type="submit">+</button>
            <div className="select">
                <select name="todo-items" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>
        </form>
        
    );
}

export default Form;