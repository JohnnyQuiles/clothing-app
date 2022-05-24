import React, { useState } from 'react';
import Items from './components/items'
import './App.css';
import ClothingData from './Data';

// Gives us a full outfit 
const getOutfit = (dressCode) => {
  // 1. Filter out all elements that arent dress code
  const dressFilter = ClothingData.filter(item => item.dressCode === dressCode)

  // 2. Split outfits based on there type (top, bottom, shoes)
  const topList = dressFilter.filter(item => item.type === 'top')
  const bottomList = dressFilter.filter(item => item.type === 'bottom')
  const shoeList = dressFilter.filter(item => item.type === 'shoes')

  // 3. Select one from each other those at random.
  return {
    top: topList[Math.floor(Math.random() * topList.length)],
    bottom: bottomList[Math.floor(Math.random() * bottomList.length)],
    shoes: shoeList[Math.floor(Math.random() * shoeList.length)]
  }
}

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const basedOnWeekday = (weekday) => {
  switch (weekday) {
    case 'Saturday':
      return getOutfit('casual');
      break;

    case 'Sunday':
      return getOutfit('sport');
      break;

    default: 
    return getOutfit('formal');
    break;
  }
}
const App = () => {
  const d = new Date();
  let day = weekday[d.getDay()]

  const [selectOutfit, setSelectOutfit] = useState(basedOnWeekday(day));
  console.log(selectOutfit);
  return (
    <div className="App">
      <h1 className='App-Header'>Clothing Match App</h1>
      <br />

      <div>
        {d.toDateString()}
      </div>
      <br />

      <div className='App-para'>
        Goodmorning!
        Here is what we recommend you should wear today:
      </div>
      <br />

      <Items
        description={selectOutfit.top.description}
        type={selectOutfit.top.type}
        itemImage={selectOutfit.top.imageUrl}
      />
      <br />

      <Items
        description={selectOutfit.bottom.description}
        type={selectOutfit.bottom.type}
        itemImages={selectOutfit.bottom.imageUrl}
      />
      <br />

      <Items
        description={selectOutfit.shoes.description}
        type={selectOutfit.shoes.type}
        itemImages={selectOutfit.shoes.imageUrl}
      />

      <button onClick={() => {
        setSelectOutfit(basedOnWeekday(day));
      }}>Try Again</button>
      <br />

      <button onClick={() => {
        setSelectOutfit(getOutfit('formal'));
      }}>Formal</button>
      <br />

      <button onClick={() => {
        setSelectOutfit(getOutfit('casual'));
      }}>Casual</button>
      <br />

      <button onClick={() => {
        setSelectOutfit(getOutfit('sport'));
      }}>Sport</button>
      <br />

    </div>
  );
}

export default App;
