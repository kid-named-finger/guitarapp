import { useState } from 'react';
import Guitars from './guitarDB.json'
import guitarImage from './guitar.png'
import SeeReviews from './SeeReviews';

function Store() {
    const [enteredKeywords, setEnteredKeywords] = useState('');
   
    return (
        <>  
            <form class="container mt-2 mb-3" style={{height: '585px',overflow: 'auto'}}>
                <h3>Store</h3>
                <div>
                    {Guitars.filter( 
                        guitar => guitar.manufacturer.toLowerCase().includes(enteredKeywords.toLowerCase()) 
                        || guitar.title.toLowerCase().includes(enteredKeywords.toLowerCase())
                        || guitar.price.toLowerCase().includes(enteredKeywords.toLowerCase()) 
                    ).map( 
                        guitar => { 
                            return( 
                                <div className='border border-black mt-1' style={{backgroundColor: 'whitesmoke'}}>
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <div class="well">
                                                <img className="p-0" src={guitarImage} style={{height: '30vh', width: '30vh'}}></img>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="well">
                                                <ul className='px-1'>
                                                    <li>Model: {guitar.title}</li>
                                                    <li>Maker: {guitar.manufacturer}</li>
                                                    <li>
                                                        <i class="bi bi-star-fill" style={{color: '#FFD700'}}></i>
                                                        <i class="bi bi-star-fill" style={{color: '#FFD700'}}></i>
                                                        <i class="bi bi-star-fill" style={{color: '#FFD700'}}></i>
                                                        <i class="bi bi-star-fill" style={{color: '#FFD700'}}></i>
                                                        <i class="bi bi-star-fill" style={{color: '#FFD700'}}></i>
                                                    </li>
                                                    <li>Price: ${guitar.price}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-sm-3 d-flex flex-column">
                                            <div class="mt-auto ms-auto pe-0">
                                                <SeeReviews></SeeReviews>
                                                <button class="btn btn-primary no-rounded me-1 mb-1">Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ); 
                        } 
                    )}
                </div>
            </form>
        </>
    )
}

export default Store;