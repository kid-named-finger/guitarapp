import { Link } from "react-router-dom";
import logo from './applogo.png'

function HeaderTest() {

    const headerStyle = {
        minHeight: '15vh',
        background: "-webkit-gradient(linear, left top, left bottom, from(#10adb2), to(#005b8a))" 
    }

    return (
        <>
        <nav class="navbar navbar-expand-sm fixed-top" style={headerStyle}>
	        <div class="container-fluid">	    
		        <div class="collapse navbar-collapse align-items-start" id="navbarSupportedContent">
                    <div class="me-auto">
			            
                        <Link to="/" class="fs-1 p-3 m-0 text-center text-white"
                        style={{textDecoration: 'none'}}>Welcome Back</Link>
		            </div>

                    <form class="d-flex ms-auto order-1">
                        <img className="rounded-circle p-0" src={logo} style={{height: 96, width: 96}}></img>
                    </form>

		            <ul class="navbar-nav ms-auto order-2 ">
			        <li class="nav-item">
                        <Link to="/" class="col-12 col-md-6 col-lg-6 p-3 m-0 text-center text-white"
                        style={{textDecoration: 'none'}}>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/" class="col-12 col-md-6 col-lg-6 p-3 m-0 text-center text-white"
                        style={{textDecoration: 'none'}}>Store</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/" class="col-12 col-md-6 col-lg-6 p-3 m-0 text-center text-white"
                        style={{textDecoration: 'none'}}>Community</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/" class="col-12 col-md-6 col-lg-6 p-3 m-0 text-center text-white"
                        style={{textDecoration: 'none'}}>Profile</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/" class="col-12 col-md-6 col-lg-6 p-3 m-0 text-center text-white"
                        style={{textDecoration: 'none'}}>Log Out</Link>
                    </li>
		        </ul>
		</div>
	  </div>
	</nav>
        </>
    )
}

export default HeaderTest;