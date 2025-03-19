import { useState } from 'react';
import products from './products'
import viewList from './icons/view_list.png'
import viewModule from './icons/view_module.png'

export default function Store () {  
  const iconsList = [
    {
      name: "view_list", 
      img: viewList, 
    },
    {
      name: "view_module", 
      img: viewModule, 
    },
  ];

  const [menu, setItems] = useState("view_list");

  // обработчик события нажатия
  const onSwitch = (icon) => {
    setItems(icon);
  } 

  // отображение списка товаров в зависимости от выбранного меню  
  const renderItems = () => {  
    if (menu === "view_module") {
      return products.map((item) => (  
        <div className={`item ${menu}`} key={item.img} style={{  
          backgroundImage: `url(${item.img})`,  
          backgroundSize: 'cover',   
        }}>  
          <h3 className='item-name'>{item.name}</h3>  
          <span className='item-color'>{item.color}</span>            
          <div className='item-price-btn'>  
            <span className='item-price'>${item.price}</span>  
            <button className='item-btn-atc' onClick={() => console.log(`ADD TO CART: ${item.name} - $${item.price}`)} >ADD TO CART</button>  
          </div>  
        </div>  
      ));  
    } else if (menu === "view_list") {
      return products.map((item) => (  
        <div className={`item ${menu}`} key={item.img} style={{ 
        }}>  
        <img src={item.img} alt={item.name} className='item-img'/>
          <h3 className='item-name'>{item.name}</h3>  
          <span className='item-color'>{item.color}</span>            
          <span className='item-price'>${item.price}</span>  
          <button className='item-btn-atc' onClick={() => console.log(`ADD TO CART: ${item.name} - $${item.price}`)} >ADD TO CART</button>  
        </div>  
      ));  
    } else {
      console.log("Ошибка! Иконка меню не выбрана!");
    }
    
  }   

  return (  
    <>      
      <div className='toolbar'>  
        {iconsList.map((icons) => (  
          <button   
            key={icons.name}   
            onClick={() => onSwitch(icons.name)}   
            className='btn'  
            style={{  
              backgroundImage: `url(${icons.img})`,   
              backgroundSize: 'cover',   
              width: '50px',  
              height: '50px',  
            }}  
          >  
          </button>  
        ))}   
      </div>  
      <div className={`item-lists ${menu}`}>  
        {renderItems()}   
      </div>  
    </>  
  );  

}
