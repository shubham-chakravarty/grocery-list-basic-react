import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

import { useState, useEffect } from "react";

function App() {
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const fetchItems = async () => {
      try{
        const response = await fetch (API_URL);
        if (!response.ok)
          throw new Error('Did not receive expected data');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      }catch (err){
        setFetchError(err.message);
      }finally{
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      fetchItems();
    }, 2000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;

    //add it to list
    const newEle = {
      id: items.length + 1,
      checked: false,
      item: newItem,
    };
    const listItems = [...items, newEle];
    setNewItem("");
    updateItem(listItems);
  };

  const updateItem = (listItems) => {
    setItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    updateItem(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    updateItem(listItems);
  };

  return (
    <div className="App">
      <Header title="Grocery Lists" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p>Loading Items ..</p>}
        {fetchError && <p style={{color: 'red'}}>{`Error : ${fetchError}`}</p>}
        {!isLoading && !fetchError && <Content
          items={items.filter((item) =>
            item.item.toLowerCase().includes(search.toLowerCase())
          )}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer count={items.length} />
    </div>
  );
}

export default App;
