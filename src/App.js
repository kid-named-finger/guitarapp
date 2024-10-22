import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import MyGuitars from './components/MyGuitars';
import MyTabs from './components/MyTabs';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import Settings from './components/Settings';
import Wishlist from './components/Wishlist';
import LikedGuitars from './components/LikedGuitars';
import Store from './components/Store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Upload from './components/Upload';
import FooterInfo from './components/FooterInfo';



function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Overview/>}></Route>
          <Route path='/store' element={<Store/>}></Route>
          <Route path='/myGuitars' element={<MyGuitars/>}></Route>
          <Route path='/myTabs' element={<MyTabs/>}></Route>
          <Route path='/reviews' element={<Reviews/>}></Route>
          <Route path='/likedGuitars' element={<LikedGuitars/>}></Route>
          <Route path='/wishlist' element={<Wishlist/>}></Route>
          <Route path='/settings' element={<Settings/>}></Route>
          <Route path='/upload' element={<Upload/>}></Route>
        </Routes>

        <FooterInfo></FooterInfo>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
