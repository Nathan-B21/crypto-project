import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';

const CryptoDetails = (props) =>{
    const [cryptoInfo, setCryptoInfo] = useState({});
    const [cryptoDesc, setCryptoDesc] = useState({});
    const [cryptoImage, setCryptoImage] = useState({});
    useEffect(()=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/${props.id}`)
        .then(res=>{
            console.log("**********")
            console.log(res);
            setCryptoInfo(res.data);
            setCryptoDesc(res.data.description)
            setCryptoImage(res.data.image)
            console.log("*********")
            console.log(res.data.description)
            // setCryptoDesc(res.data.map(description =>{
            //     return{
            //         ...description,
            //         en: removeTags(description.en)
            //     }
            // }));

        })
        .catch(err=> console.log(err))
    },[])



    // const removeTags = (data) =>{

    //     if((data === null) || data ==='')
    //         return false;
    //     else{
    //         data = data.toString()
    //     }
    //     let result = cryptoDesc.filter
    //     result = cryptoDesc.filter((data) =>{
    //         return data.en.replace( /(<([^>]+)>)/ig, '')
    //     });

    //     setCryptoDesc(result)
    // }


    // function removeTags(str){
    //     if((str === null) || str==='')
    //         return false;
    //     else{
    //         str = str.toString()
    //     }
    // return str.replace( /(<([^>]+)>)/ig, '')
    // }

    const removeTags = (str) => {
        if (str) {
            return str.replace(/<[^>]+>/g, '')  
        }
    }


    

    return (
        <div>
            <div className= "card align-items-center">
            <img class="card-img-top" src={cryptoImage.large} style = {{width: 400}} alt="Card image cap"></img>
                <div className= "card-body">
                    <h5 className = "card-title">{cryptoInfo.name}</h5>
                    {/* THIS WORKS ON THE DETAILS PAGE IF IT'S ALREADY LOADED, BUT ONCE RELOADED IT WON'T WORK???? */}
                    
                    <div className = "card-text">{removeTags(cryptoDesc.en)}</div>
                    {/* <div className = "card-text">{cryptoDesc.en}</div> */}
                </div>

            </div>
        </div>

    );
};
export default CryptoDetails;