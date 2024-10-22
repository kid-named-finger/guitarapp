import { Link } from "react-router-dom";


function Navbar() {
    return (
        <>
            <div style={{backgroundColor: '#0B4669'}}>
                    <ul style={{ display: 'flex', height: '50px', color: 'white', justifyContent: 'space-evenly', alignItems: 'center', listStyleType: 'none', padding: 0, margin: 0 }}> 
                        <li><Link to="/" class="text-center text-white"
                        style={{textDecoration: 'none'}}>Library</Link></li>

                        <li><Link to="/myGuitars" class="text-center text-white"
                        style={{textDecoration: 'none'}}>My Guitars</Link></li>

                        <li><Link to="/myTabs" class="text-center text-white"
                        style={{textDecoration: 'none'}}>My Tabs</Link></li>

                        <li><Link to="/reviews" class="text-center text-white"
                        style={{textDecoration: 'none'}}>Reviews</Link></li>

                        <li><Link to="/wishlist" class="text-center text-white"
                        style={{textDecoration: 'none'}}>Wishlist</Link></li>

                        <li><Link to="/likedGuitars" class="text-center text-white"
                        style={{textDecoration: 'none'}}>Liked Guitars</Link></li>

                        <li><Link to="/settings" class="text-center text-white"
                        style={{textDecoration: 'none'}}>Settings</Link></li>
                    </ul>
            </div>
        </>
    )
}

export default Navbar;