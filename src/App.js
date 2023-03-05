import './App.css';
import { itemData } from './mock/data/itemData';
import ShopItemClass from './components/ShopItemClass';

function App() {
  
  return (

    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemClass { ...itemData } />
    </div>
  </div>
  );
}

export default App;
