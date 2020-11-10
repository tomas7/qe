import React, {useEffect, useState} from 'react'
import {Image} from 'cloudinary-react';
function GetImages() {
    const [state, setState] = useState([])
    useEffect(() => {
        
     
    },[])
    let el = null;
    let elArr = [];
    let myFun = (t) => {
        setState(t)
     
      
    }

    let returnRes = () => {
        state.forEach(element => {
            el =  <Image cloudName="dwefdgjdu" publicId={element} width="300" crop="scale"/>
            elArr.push(el)
        });
        return(elArr)
    }
    const download = (url_download) => {
        var element = document.createElement("a");
        var file = new Blob(
        
            {url_download}
          ,
          { type: "image/*" }
        );
        element.href = URL.createObjectURL(file);
        element.download = "image.jpg";
        element.click();
      };
    async function getImages ( url =`http://localhost:5000/getImg`) {
        const response = await fetch(url, {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({payload: "highRes"}),
            
          });
          let json = await response.json();
          console.log(json)

          setState(json)
        //   console.log(await response.json())

    }

    return (
        <div>
            <h1>Results</h1>
            <button onClick={() => getImages()}>click</button>
            <button onClick={() => console.log(state)}>click</button>

             {state.forEach(element => {
                     <Image cloudName="dwefdgjdu" publicId={element} width="300" crop="scale"/>
  
             })}

{state && state.map((i, idx) => (
    <div>
        <Image cloudName="dwefdgjdu" publicId={i.public_id} width="300" crop="scale"/>
        <a
        href={i.secure_url}
        download
        onClick={() => download(i.secure_url)}
      >
          <i className="fa fa-download" />
        download
      </a>
    </div>
                     

                     
))
} 
         

        </div>
    )
}

export default GetImages
