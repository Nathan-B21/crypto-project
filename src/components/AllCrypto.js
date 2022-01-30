import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from "@reach/router";






const AllCrypto = () =>{
    const [allCrypto, setCrypto] = useState([]);

    const [filteredCrypto, setFilteredCrypto] = useState(allCrypto);
    //delete clicked



    useEffect(()=>{
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then(res =>{
            console.log("*********")
            console.log(res.data)
            console.log("**********")
            setCrypto(res.data)
            setFilteredCrypto(res.data)


        })
        .catch(err=>{
            console.log(err)
        })
    }, [])//DELETE CLICKED IN THE ARRAY PASSED HERE LATER MAYBE
    



//******************* */
    const handleSearch = (event) =>{
        // I feel like putting toLowerCase() at the end should fix my issue but it doesn't? 
        let value = event.target.value.toLowerCase();
        
        //added this doesn't work
        if (value === value.toUpperCase()){
            value.toLowerCase()
        }
        console.log(value);
        //***** */
        // changed allCrypto to filteredCrypto didn't work ? or did it?
        let result = allCrypto.filter
        result = allCrypto.filter((data) => {

            return data.name.toLowerCase().search(value) != -1;
        });
        console.log(value);
        console.log(result);
        

        setFilteredCrypto(result);

    }
    //missing something. first letter wont work. Why?

    // ************************OLD STUFF***************
    // trying search function
    // const searchFilter = ()=>{
    //     var input, filter, cryptoCards, cryptoName, i, a, txtValue
    //     input = document.getElementById('myInput');
    //     filter = input.value.toUpperCase();
    //     cryptoCards = document.getElementById("cryptoCards");
    //     cryptoName = document.getElementById("cryptoName");

    //     // Loop through all list Items, and hide those who don't match the search query 
    //     // went off of this site https://www.w3schools.com/howto/howto_js_filter_lists.asp
    //     // couldn't get it to work :(
    //     // WHAT TO THINK ABOUT: I can display all the crypto names as you can see on the allcryptos page. Maybe I need to make an array of all the cryptonames, store them in there and then somehow filter through them on the webpage.

    //     for ( i = 0; i < cryptoName.length; i++){
    //         a = cryptoName[i].getElementsByTagName("a")[0];
    //         txtValue = a.textContent || a.innerText;
    //         if(txtValue.toUpperCase().indexOf(filter) > -1){
    //             cryptoName[i].style.display = "";
    //         } else{
    //             cryptoName[i].style.display = "none";
    //         }
    //         }
    //     }
    //************************************ */
    




    return(
        <div>
            {/* {SEARCH BAR} */}
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="navbar justify-content-between" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a class="nav-item nav-link active" href="#">Home</a>
                        <a class="nav-item nav-link" href="#">Features</a>
                        <a class="nav-item nav-link" href="#">Pricing</a>
                        <label>Search: </label>
                            <input type = "text" onChange={(event) =>handleSearch(event)} ></input>



                    </div>
                </div>
            </nav>

        {/* <div className="d-flex flex-column justify-content-center align-items-center">  */}
        <div className="container"> 
            <div className='d-flex row'>
            {
                
                //origionaly used filteredCrypto maybe I should get rid of anything filteredCrypto and just work off of allCrypto?
                filteredCrypto.map((crypto,i)=>{
                    return<div id = "cryptoCards"className="card align-items-center" style = {{width: 400}} key = {i}>


                        <img className="card-img-top " src={crypto.image} style = {{width: 100}}></img>
                        <div className="card-body">
                            <h5 id = "cryptoName"className="card-title">{crypto.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            
                            {/* THIS WILL NOT WORK BUT THE BASIC IDEA IS THERE. FIGURE IT OUT */}
                            <Link to ={`/CryptoDetails/${crypto.id}`} className="btn btn-primary">Show Data</Link>
                        </div>
                            {/* <tr>
                                <td>{crypto.name}</td>

                            </tr> */}

                    </div>
                })
                
            }
        </div>
        </div>
    </div>
    );
};
export default AllCrypto;