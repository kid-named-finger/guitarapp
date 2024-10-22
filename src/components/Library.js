import { useState } from 'react';
import { Link } from 'react-router-dom';
import Tabs from './tabs.json'
import jerma from './jerma.png'
import Guitars from './guitars.json'
import SeeReviews from './SeeReviews';

function Library() {
    const [enteredKeywords, setEnteredKeywords] = useState('');
    let id = 0

    return (
        <>
            <div className='container-fluid' style={{backgroundColor: '#e7e7e7'}}>
                <form className='row justify-content-end mt-4' style={{minHeight: '80vh'}}>
                    {/* Left tab */}
                    <div className="col-12 col-lg-2" style={{maxHeight: '20vh'}}>
                        <img className="rounded-circle p-0" src={jerma} style={{height: '30vh', width: '30vh'}}></img>
                        <a class="btn btn-primary mt-2 mx-4" href="/upload" role="button">Upload Tab File</a>
                    </div>
                    
                    {/* Middle tabs */}
                    <div className='col-12 col-lg-8'>
                        {/* Guitar Form */}
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
                                                            <Link to={'/store'}><button class="btn btn-primary no-rounded me-1 mb-1">See this guitar instore</button></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ); 
                                    } 
                                )}
                            </div>
                        </form>

                        {/* Tabs Form */}
                        <form class="container mb-3" style={{height: '585px',overflow: 'auto'}}>
                            <h3>Tabs Uploaded</h3>
                            <div>
                                {Tabs.filter( 
                                    tablature => tablature.Artist.toLowerCase().includes(enteredKeywords.toLowerCase()) 
                                    || tablature.SongName.toLowerCase().includes(enteredKeywords.toLowerCase())
                                    || tablature.SongRating.toLowerCase().includes(enteredKeywords.toLowerCase()) 
                                    || tablature.SongHits.toLowerCase().includes(enteredKeywords.toLowerCase())
                                    || tablature.PageType.toLowerCase().includes(enteredKeywords.toLowerCase())
                                    || tablature.Difficulty.toLowerCase().includes(enteredKeywords.toLowerCase())
                                    || tablature.Key.toLowerCase().includes(enteredKeywords.toLowerCase())
                                    || tablature.Capo.toLowerCase().includes(enteredKeywords.toLowerCase())
                                    || tablature.Tuning.toLowerCase().includes(enteredKeywords.toLowerCase())
                                ).map( 
                                    tablature => { 
                                        return( 
                                            <div className='border border-black mb-3'>
                                                <div class="row">
                                                    <div class="col-sm-3">
                                                        <div class="well">
                                                            <img className="p-0" src={tablature.URL} style={{height: '30vh', width: '30vh'}}></img>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <div class="well">
                                                            <ul className='px-1'>
                                                                <li>Song: {tablature.SongName}</li>
                                                                <li>Artist: {tablature.Artist}</li>
                                                                <li>Rating: {tablature.SongRating}</li>
                                                                <li>Hits: {tablature.SongHits}</li>
                                                                <li>Difficulty: {tablature.Difficulty}</li>
                                                                <li>Key: {tablature.Key}</li>
                                                                <li>{tablature.Capo}</li>
                                                                <li>Tuning: {tablature.Tuning}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-3 d-flex flex-column">
                                                        <div class="mt-auto ms-auto pe-0">
                                                            <SeeReviews></SeeReviews>
                                                            <button class="btn btn-primary me-1 mb-1">See this tab instore</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ); 
                                    } 
                                )}
                            </div>
                        </form>
                    </div>
                    
                    {/* Right tabs */}
                    <div className='col-12 col-lg-2'>
                        <form class="row col-12 g-3 border border-black text text-white bg bg-secondary">
                            <ul>
                                <li>About Me</li>
                                <li>Name</li>
                                <li>Country</li>
                                <li>Guitars Owned</li>
                                <li>Tabs Uploaded</li>
                                <li><Link to="/reviews"
                                style={{textDecoration: 'none'}}>Reviews</Link></li>
                                <li>Trusted Member</li>
                            </ul>
                        </form>

                        {/* Friends box */}
                        <form class="row col-12 g-3 mt-2 text text-white border border-black bg bg-secondary" style={{minHeight: '20vh'}}>
                            <ul>
                                <li><strong>Online friends</strong></li>
                                <li>Bert</li>
                                <li>Grammes</li>
                                <li>bom</li>
                                <li>Terry</li>
                               
                            </ul>
                            <ul>
                                <li><strong>Offline friends</strong></li>
                                <li>dog</li>
                                <li>cat</li>
                            </ul>
                        </form>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Library;