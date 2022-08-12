import React, {useState} from 'react';

const AddTodo = ({createTodo}) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const create = (name, description) => {
        if (name && description) {
            createTodo(name, description)
            setName('')
            setDescription('')
        } else
        return alert('Error, name or description is empty!')
    }

    return (
        <div className={'addTodos'}>
            <input className={'myInput'}
                placeholder={'Text todos name'}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input className={'myInput'}
                placeholder={'Text todos description'}
                value={description}
                onChange={(e) =>  setDescription(e.target.value)}
            />
            <div className={'divButton'}>
                <button className={'MyBtn'} onClick={() => {
                    create(name, description)
                    }}

                >Add todo</button>
            </div>
        </div>
    );
};

export default AddTodo;