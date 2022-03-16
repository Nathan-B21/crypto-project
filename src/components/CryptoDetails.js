import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const CryptoDetails = (props) => {
    const [cryptoInfo, setCryptoInfo] = useState({});
    const [cryptoDesc, setCryptoDesc] = useState({});
    const [cryptoImage, setCryptoImage] = useState({});
    const [cryptoMarketData, setCryptoMarketData] = useState({});


    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${props.id}`)
            .then(res => {
                console.log("**********")
                console.log(res);
                setCryptoInfo(res.data);
                setCryptoDesc(res.data.description)
                setCryptoImage(res.data.image)
                setCryptoMarketData(res.data.market_data)
                console.log("*********")
                console.log(res.data.description)
                console.log("*****marketdata*****")
                console.log(res.data.market_data)
                // console.log(cryptoMarketData.current_price.usd)
                // console.log("high_24h")
                // console.log(cryptoMarketData.high_24h.usd)
                
                // setCryptoDesc(res.data.map(description =>{
                //     return{
                //         ...description,
                //         en: removeTags(description.en)
                //     }
                // }));
            })
            .catch(err => console.log(err))
    }, [])



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


    const formatMoney = (data) => {
        if (data){
            return data.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
        }
        
    }





    return (
        <div>
            <div className="card align-items-center" >
                <img class="card-img-top" src={cryptoImage.large} style={{ width: 200 }} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{cryptoInfo.name}</h5>
                    {/* THIS WORKS ON THE DETAILS PAGE IF IT'S ALREADY LOADED, BUT ONCE RELOADED IT WON'T WORK???? */} {/*PROBLEM FIXED */}

                    <div className="card-text">{removeTags(cryptoDesc.en)}</div>
                    {/* <div className = "card-text">{cryptoDesc.en}</div> */}
                </div>


            </div>
            <div class="card">
                
                    <div class="card-body">
                        <h5 className="card-title">Current Price</h5>
                        <p className="card-text">{formatMoney(cryptoMarketData.current_price?.usd)}</p>
                        <div className='card-body'>
                            <h5>All time high (past 24 hours)</h5>
                            <p className="card-text">{formatMoney(cryptoMarketData.high_24h?.usd)}</p> 

                        </div>

                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div className="card-body">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
            </div>

        </div>

    );
};
export default CryptoDetails;