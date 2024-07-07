import Navbar from './navbar';
import Card from './card';
import data from './data';

import './App.css';

function App() {

  const cards = data.map(item=>{
    return (
      <Card 
      key = {item.id}
      title={item.title}
      location={item.location} 
      googleMapsUrl={item.googleMapsUrl} 
      startDate={item.startDate}
      endDate={item.endDate} 
      description={item.description}
      imageUrl={item.imageUrl}

      />
    )
  })
  return (
    <div className="App">
      <Navbar/>

      
      {cards}
   
      
    </div>
    
  );
}

export default App;
