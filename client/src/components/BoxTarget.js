import React, { useContext }from 'react';
import { useDrop } from 'react-dnd';
import { itemTypes } from '../utils/items';
import { CardContext } from './Card';

function BoxTarget(props) {
    const { markAsDone } = useContext(CardContext);

    const[{isOver}, drop] = useDrop({
        accept: itemTypes.CARD,
        drop: (item, monitor) => markAsDone(item.id),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        }),
    });

    return (
        <div ref={drop} style={{
            display: "flex",
            flexWrap: "wrap",
            width: "500px",
            height: "500px",
            margin: "20px",
            backgroundColor: isOver ? "yellow" : "teal"
        }}>
            {props.children}
        </div>
    )
}

export default BoxTarget
