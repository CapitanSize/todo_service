import React, {useEffect, useState} from 'react';
import '../styles/styles.css'


const TodoEditItem = ({openMenu, open, editTodos, todo}) => {

    const states = ['Completed', 'In process', 'Expected']
    const [name, setName] = useState('')
    const  [description, setDescription] = useState('')
    const [state, setState] = useState('')

    useEffect(() => {
        setName(todo.name)
        setDescription(todo.description)
        setState(todo.state)
    }, [open, todo])

    function addTodo (name, description, state) {
        if (name && description) {
            openMenu()
            editTodos(todo.id, name, description, state)
            setDescription('')
            setName('')
        } else
        return alert('Error, name or description is empty!')
    }

    return (
        open
            ? <div className={'todoEdit'}>
                <h2>Enter name of the todo...</h2>
                <input
                    className={'Input'}
                    placeholder={'Name...'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}

                />
                <h2>Enter description of the todo...</h2>
                <textarea
                    className={'TextArea'}
                    placeholder={'Description...'}
                    style={{maxWidth: '720px', maxHeight: '100px', minHeight: '100px', minWidth: '720px'}}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <select className={'Select'} value={state} onChange={(e) => setState(e.target.value) }>
                    {states.map((st, index) =>
                        <option key={index} value={st}>{st}</option>
                    )}
                </select>
                <div
                    style={{
                        display:'flex',
                        justifyContent: 'space-between',
                        paddingRight: '30px',
                        paddingLeft: '30px'
                    }}
                >
                    <button className={'Button'} onClick={() => {
                        addTodo(name, description, state)
                    }}>Confirm</button>
                    <button className={'Button'} onClick={openMenu}>Cancel</button>
                </div>
            </div>
            :
            <div className={'Choose'}>
                <p>Choose todo to edit it...</p>
            </div>

    );
};

export default TodoEditItem;