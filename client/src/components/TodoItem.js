import React from 'react';

const TodoItem = ({id, name, state, deleteTodo, setOpen, setSelectedTodo}) => {

    function setBackground (state) {
        if (state === 'Completed') {
            return 'lightgreen'
        }
        if (state === 'In process') {
            return  'lightblue'
        }
        return 'lightgray'
    }

    return (
        <div className={'TodoItem'} style={{
            backgroundColor: setBackground(state)
            }}
             onClick={() => {
                 setOpen(true)
                 setSelectedTodo(id)
             }}
        >
            <div
                className={'TodoItem-text'}
            >
                {id}. {name}
            </div>
            <div className={'todoItemButtons'}>
                <h3
                    style={{
                        color: 'lightcoral',
                        marginRight: '10px',
                        marginLeft: '10px',
                        fontFamily: 'Arial, serif'
                    }}
                >
                    {state}
                </h3>
                <div style={{zIndex: 10}}>
                <button
                    className={'todoButtonDelete'}
                    onClick={(e) => {
                    deleteTodo(id)
                    e.stopPropagation()
                    setOpen(false)
                    }}
                >
                    DELETE
                </button>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;