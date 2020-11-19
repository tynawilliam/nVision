import React, { useEffect, useState } from 'react'
import Unsplash, { toJson } from 'unsplash-js';
import fetch from 'node-fetch';
global.fetch = fetch;


function ImageSearch() {
    const [startSearch, setStartSearch] = useState(false)
    const [images, setImages ] = useState([
        {
            urls: {
                small: "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg"
            }
        }
    ])
    const [searchTerm, setSearchTerm] = useState('dog')
    // const singleImage = images.results[0].urls.regular
    const unsplash = new Unsplash({ accessKey: `8aHQQpHFrOaLp9HmUj1KNGz7xJkNgIa2WgegE3_rscE` })

    unsplash.users.profile("tynawilliam")
        .catch(err => {
            console.error(err)
        })

    useEffect(() => {
        (async() => {
            const data = await unsplash.search.photos(`${searchTerm}`, 1, 10, { orientation: "portrait", color: "green"})
            try{
                if (data.ok) {
                    const jsonData = await data.json()
                    console.log(jsonData)
                    setImages(jsonData.results)
                    // console.log(images)
                }
            }catch(err) {
                console.error(err)
            }
        })()
    }, [searchTerm])

    const getWord = e => {
        setSearchTerm(e.target.value)

    }

    const getSearch = e => {
        e.preventDefault()
        console.log('searching')
    }
        return (
            <div>
                <form>
                    <input type='text' value={searchTerm} onChange={getWord}/>
                    <button type='submit' onSubmit={getSearch}>Search</button>
                </form>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}>
                    {images.map((img, idx) => (
                        <div key={idx}>
                            <img src={img.urls.small} style={{
                                width: "200px",
                                height: "250px"
                            }}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    export default ImageSearch
