import React, {useEffect, useState} from 'react'

function GetImages() {

    useEffect(() => {
        
       
    }, [])

    async function getImages ( url =`http://localhost:5000/def`) {
        const response = await fetch(url, {
            method: 'get',
            headers: { 'Content-type': 'application/json' },
          
            
          });
          console.log(await response)
        //   console.log(await response.json())

    }

    return (
        <div>
            <h1>Results</h1>
            <button onClick={() => getImages()}>click</button>
        </div>
    )
}

export default GetImages
