import React from 'react';
import { useDrag } from 'react-dnd'
import { itemTypes } from '../utils/items';

function TaskCard(props) {

    const[{isDragging}, drag] = useDrag({
        item: {
            type: itemTypes.CARD,
            id: props._id
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })

    return (
        <div ref={drag} style={{
            border: "2px solid black",
            width: "200px",
            height: "200px",
            marginBottom: "10px",
            margin: "5px",
            backgroundColor: isDragging ? "red" : "wheat",
        }}>
            <h3>{props.title}</h3>
            <p>{props.details}</p>
        </div>
    )
}

export default TaskCard
