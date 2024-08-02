import React, { useState } from "react";
import axios from 'axios';
import './Create.css'; // Import the CSS file

function Create() {
    const [task, setTask] = useState('');

    const handleAdd = () => {
        if (task.trim() === '') {
            alert('Task cannot be empty');
            return;
        }

        axios.post('http://localhost:3001/add', { task: task })
            .then(() => {
                window.location.reload(); 
            })
            .catch(err => console.log(err));
    };
    const handleKeyPres = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); 
            handleAdd();
        }
    }
    return (
        <div className="create_form">
            <input
                type="text"
                placeholder="Enter Task"
                onChange={(e) => setTask(e.target.value)}
                 onKeyPress={handleKeyPres}
            />
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    );
}

export default Create;
