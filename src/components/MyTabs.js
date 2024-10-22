import { useState } from 'react';
import Tabs from './tabs.json'
import SeeReviews from './SeeReviews';

function MyTabs() {
    const [enteredKeywords, setEnteredKeywords] = useState('');
    
    return (
        <>
            <form class="container mb-3" style={{height: '585px',overflow: 'auto'}}>
                <h3>Tabs Uploaded</h3>
                <a class="btn btn-primary mt-2 mb-2" href="/upload" role="button">Upload Tab File</a>
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
                                <div className='border border-black mb-3' style={{backgroundColor: 'whitesmoke'}}>
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
        </>
    )
}

export default MyTabs;