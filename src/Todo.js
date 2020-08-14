import React from 'react';

const Todo = (props) => {
    return (
        <div class="list-item">
            {props.content}
            <button class="delete is-pulled-right" onClick={() => {props.onDelete(props.id)}}></button>
        </div>
    );
}

export default Todo;