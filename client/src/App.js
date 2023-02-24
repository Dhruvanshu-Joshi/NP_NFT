import './App.css';
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NFTDetail from './Screens/HomeScreen/NFTDetail/NFTDetail';
import './index.css'
import WalletCard from './LoginComponents/MetaCard';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import GenerateNFT from './Screens/GenerateNFTScreen/GenerateNFT';
import CreateNFTScreen from './Screens/CreateNFTScreen/CreateNFTScreen';
import YourNFTScreen from './Screens/YourNFTScreeen/YourNFTScreen';
import SellNFTScreen from './Screens/SellNFTScreen/SellNFTScreen';


function App() {
  return (
    <>
      <div className="App">
        
        <Router>
          <Routes>
            <Route exact path='/' element={<HomeScreen />} />
            <Route exact path='/detail' element={<NFTDetail />} />
            <Route exact path='/auth' element={<WalletCard/>} />
            <Route exact path='/login' element={<LoginScreen/>} />
            <Route exact path='/generate' element={<GenerateNFT/>} />
            <Route exact path='/create' element={<CreateNFTScreen/>} />
            <Route exact path='/profile/nft' element={<YourNFTScreen/>} />
            <Route exact path='/sell' element={<SellNFTScreen/>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App; 
