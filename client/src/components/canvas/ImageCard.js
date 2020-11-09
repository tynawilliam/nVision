import React from 'react';
import { useDrag } from 'react-dnd'
import { itemTypes } from '../../utils/items';

function ImageCard(props) {

    const[{isDragging}, drag] = useDrag({
        item: {
            type: itemTypes.CARD,
            id: props.id
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })

    return (
        <div ref={drag} style={{
            width: "100px",
            height: "100px",
            marginBottom: "10px",
            margin: "5px",
            opacity: isDragging ? "0.5" : "1"
        }}>
            <p><img style={{
                width: "100px",
                height: "100px"
            }} src={props.url} alt="Not Found" /></p>
        </div>
    )
}

export default ImageCard
