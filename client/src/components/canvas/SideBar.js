import React, { useContext } from 'react';
import OptionsContext from '../../context/OptionsContext';
import '../../styles/canvas.css'
// import ImageList from './ImageList';

function SideBar() {
    const [currentOption, setCurrentOption] = useContext(OptionsContext)
    const handleClick = e => {
        setCurrentOption(e.target.id)
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
                    }} type='text' placeholder='Board name' />
                </form>
                <button id='template' onClick={handleClick}>Template</button>
                <button id='images' onClick={handleClick}>Images</button>
                <button id='shapes' onClick={handleClick}>Stickers</button>
                <button id='ribbons' onClick={handleClick}>Ribbons</button>
                <button id='notes' onClick={handleClick}>Notes</button>
            </div>
        </div>
    )
}

export default SideBar
