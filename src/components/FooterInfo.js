import { Link } from "react-router-dom";

function FooterInfo() {
    return (
        <>
            <div style={{backgroundColor: '#0B4669'}}>
                    <ul style={{ display: 'flex', height: '50px', color: 'white', justifyContent: 'space-evenly', alignItems: 'center', listStyleType: 'none', padding: 0, margin: 0 }}> 
                        <li>FAQ</li>
                        <li>Privacy Policy</li>
                        <li>About</li>
                        <li>Contact Us</li>
                    </ul>
            </div>
        </>
    )
}

export default FooterInfo;