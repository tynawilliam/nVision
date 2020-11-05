import React from 'react';
import '../../styles/canvas.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnderline,
        faItalic,
        faBold,
        faAlignCenter,
        faListUl,
        faSmileBeam,
        faUpload,
        faDownload,
        faShareAlt
    } from '@fortawesome/free-solid-svg-icons'

function Toolbar() {

    const underline = <FontAwesomeIcon icon={faUnderline} />
    const italic = <FontAwesomeIcon icon={faItalic}/>
    const bold = <FontAwesomeIcon icon={faBold}/>
    const center = <FontAwesomeIcon icon={faAlignCenter}/>
    const ul_list = <FontAwesomeIcon icon={faListUl}/>
    const emoji = <FontAwesomeIcon icon={faSmileBeam}/>
    const upload = <FontAwesomeIcon icon={faUpload}/>
    const download = <FontAwesomeIcon icon={faDownload}/>
    const share = <FontAwesomeIcon icon={faShareAlt}/>
    return (
        <div className='toolbar'>
            <form>
            <select style={{
                margin: "30px",
                borderRadius: "5px",
                width: "150px",
                height: "35px",
                fontSize: "15px",
                outline: "none"
                }}>
                    <option value='timesNewRoman'>Times New Roman</option>\
                    <option value='arial'>Arial</option>
                    <option value="roboto">Roboto</option>
                    <option value="sansSerif">Sans Serif</option>
                    <option value="helvetica">Helvetica</option>
                </select>
                <select style={{
                margin: "20px",
                borderRadius: "5px",
                width: "50px",
                height: "35px",
                fontSize: "15px",
                outline: "none"
                }}>
                    <option>14</option>\
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                </select>
                <button className='formatButton'>{underline}</button>
                <button className='formatButton' >{italic}</button>
                <button className='formatButton' >{bold}</button>
                <button className='formatButton' >{center}</button>
                <button className='formatButton' >{ul_list}</button>
                <button className='formatButton' >{emoji}</button>
                <button className='formatButton' ><h1 style={{
                    backgroundImage: "linear-gradient(45deg, yellow, red)",
                    backgroundSize: "100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "30px"
                }}>Aa</h1></button>
                <span style={{
                    marginLeft: "300px"
                }}>
                    <button className='leftIcons'>{upload}</button>
                    <button className='leftIcons'>{download}</button>
                    <button className='leftIcons'>{share}</button>
                </span>
            </form>
        </div>
    )
}

export default Toolbar
