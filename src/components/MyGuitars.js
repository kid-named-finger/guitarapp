import { useState } from 'react';
import Guitars from './guitars.json'
import SeeReviews from './SeeReviews';

function MyGuitars() {
    const [enteredKeywords, setEnteredKeywords] = useState('');
    let id = 0
    
    return (
        <>
            <form class="container mt-2 mb-3" style={{height: '585px',overflow: 'auto'}}>
                <h3>Guitars Owned</h3>
                <div>
                    {Guitars.filter( 
                        guitar => guitar.manufacturer.toLowerCase().includes(enteredKeywords.toLowerCase()) 
                        || guitar.name.toLowerCase().includes(enteredKeywords.toLowerCase())
                        || guitar.price.toLowerCase().includes(enteredKeywords.toLowerCase()) 
                        || guitar.url.toLowerCase().includes(enteredKeywords.toLowerCase())
                    ).map( 
                        guitar => { 
                            return( 
                                <div className='border border-black mt-1' key={id++} style={{backgroundColor: 'whitesmoke'}}>
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <div class="well">
                                                <img className="p-0" src={guitar.url} style={{height: '30vh', width: '30vh'}}></img>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="well">
                                                <ul className='px-1'>
                                                    <li>Model: {guitar.name}</li>
                                                    <li>Date Made: -</li>
                                                    <li>Maker: {guitar.manufacturer}</li>
                                                    <li>Owned Since: 23-04-24</li>
                                                    <li>Strings: 6</li>
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
                                                <button class="btn btn-primary no-rounded me-1 mb-1">See this guitar instore</button>
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

export default MyGuitars;