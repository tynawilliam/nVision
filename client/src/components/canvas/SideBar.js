import React, { useContext } from 'react';
import BoardContext from '../../context/BoardContext';
import OptionsContext from '../../context/OptionsContext';
import '../../styles/canvas.css'
// import ImageList from './ImageList';

function SideBar() {
    const [currentOption, setCurrentOption] = useContext(OptionsContext)
    const [boardName, setBoardName] = useContext(BoardContext)
    const handleClick = e => {
        setCurrentOption(e.target.id)
    }

    const getName = e => {
        setBoardName(e.target.value)
    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "row"
        }}>
            <div className='sideBar'>
                {document.body.classList.add("sideBar-body")}
                <button className='sideBar-logo'>nV</button>
                <form style={{
                    margin: "0 auto"
                }}>
                    <input style={{
                        width: "150px",
                        height: "50px",
                        background: "none",
                        border: "0",
                        fontSize: "25px",
                        paddingBottom: "20px",
                        textAlign: "center",
                        outline: "none",
                        color: "#FF914D"
                    }} type='text' placeholder='Board name' value={boardName} onChange={getName}/>
                </form>
                <button id='images' onClick={handleClick}>Images</button>
                <button id='shapes' onClick={handleClick}>Shapes</button>
                <button id='stickers' onClick={handleClick} disabled>Stickers</button>
                <button id='notes' onClick={handleClick}>Notes</button>
            </div>
        </div>
    )
}

export default SideBar
