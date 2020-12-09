import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import { itemTypes } from '../../utils/items';
import { ImgContext } from './ImageList';

function Target(props) {
    const { markAsDropped } = useContext(ImgContext);

    const [{isOver}, drop] = useDrop({
        accept: itemTypes.CARD,
        drop: (item, monitor) => markAsDropped(item.id),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        }),
    })
    return (
        <div ref={drop} style={{
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "150px",
            width: "700px",
            height: "500px",
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            backgroundColor: isOver ? "wheat" : "white"
        }} className='blank_canvas'>
            {props.children}
        </div>
    )
}

export default Target
