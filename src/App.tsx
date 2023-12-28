import React,{useState} from 'react';
import './App.css';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import {v4 as getId} from 'uuid';

import Item from './models/item';

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string, quantity: number) => {
    setItems([...items,{
      id: getId(),
      product: product,
      quantity: quantity
    }]);
  };

  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
