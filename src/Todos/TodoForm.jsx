import { useState, useRef, useEffect } from "react";

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
      }, []);

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}              
                onChange={e => setValue(e.target.value)}
                ref={inputRef}
            />
        </form>
    );
}

export default TodoForm;