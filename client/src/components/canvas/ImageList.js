import React, { useState, createContext } from 'react'
import ImageCard from './ImageCard';
import Target from './Target';
import { useDrop } from 'react-dnd';
import { itemTypes } from '../../utils/items';

export const ImgContext = createContext({
    markAsDropped: null,
})

const ImageList = () => {
    const [{isOver}, drop] = useDrop({
        accept: itemTypes.CARD,
        drop: (item, monitor) => notDropped(item.id),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    })

    const [images, setImages] = useState([
        {
            id: 1,
            status: "nd",
            url: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        },
        {
            id: 2,
            status: "nd",
            url: "https://images.unsplash.com/photo-1601758004584-903c2a9a1abc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        },
        {
            id: 3,
            status: "nd",
            url: "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        },
        {
            id: 4,
            status: "nd",
            url: "https://images.unsplash.com/photo-1565726166189-e9814a05ffde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
		},
    ]);

    const markAsDropped = id => {
        const img = images.filter((img, i) => img.id === id)
        img[0].status = 'dropped';
        setImages(images.filter((img, i) => img.id !== id).concat(img[0]));
    }
    const notDropped = id => {
        const img = images.filter((img, i) => img.id === id)
        img[0].status = 'nd';
        setImages(images.filter((img, i) => img.id !== id).concat(img[0]))
    }
    return (
        <ImgContext.Provider value={{ markAsDropped }}>
            <div style={{
                display: "flex",
                flexDirection: "row-reverse",

            }}>
                <Target>
                {images
                .filter((img, i) => img.status === 'dropped' )
                .map((img, i) => (
                    <ImageCard
                        key={img.id.toString()}
                        id={img.id}
                        status={img.status}
                        url={img.url}
                    />
                ))}
                </Target>
                <div ref={drop} style={{
                    width: "250px",
                    backgroundColor: isOver ? "wheat" : "#333333"
                }}>
                    {images
                        .filter((img, i) => img.status === 'nd' )
                        .map((img, i) => (
                            <ImageCard
                                key={img.id.toString()}
                                id={img.id}
                                status={img.status}
                                url={img.url}
                            />
                        ))}
                </div>
            </div>
        </ImgContext.Provider>
    )
}

export default ImageList
