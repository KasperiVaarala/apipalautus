
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';


const URL = 'https://www.themealdb.com/api/json/v1';


function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
   const category = '1/categories.php' 
   const address = URL + '/' + category

   axios.get(address)
   .then((response) => {
    
     setItems(response.data.categories);
     setIsLoaded(true);

   }).catch(error =>{
     setError(error);

   });
  }, [])

if (selectedItem !=null){
  return 
 
} else if(error) {
    return <p>ey bruh that don't work</p>
  }else if (!isLoaded) {
  return <p>Food coming, hold up</p>
  } else {
  return (

    <div>
      <h1>Food categories</h1>
      <div>
        {
          items.map(item => (
            <div>
            
              <h3>{item.strCategory}</h3>
              <img src={item.strCategoryThumb} />
            <p>{item.strCategoryDescription}</p>
            </div>
          ))
        }
      </div>
    </div>

  );
}
}

export default App;
