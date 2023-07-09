import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

import { useState } from "react";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("list")));
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

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
    setAndSave(listItems);
  };

  const setAndSave = (listItems) => {
    setItems(listItems);
    localStorage.setItem("list", JSON.stringify(listItems));
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSave(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSave(listItems);
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
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer count={items.length} />
    </div>
  );
}

export default App;
