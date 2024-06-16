import { useState, useEffect } from 'react';
import { fetchItems, addItem, deleteItem } from '../../utils/api';

type Item = {
  id: number;
  name: string;
  stock: number;
};

const InventoryPage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState({ name: '', stock: 0 });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const getItems = async () => {
      const items = await fetchItems();
      setItems(items);
    };
    getItems();
  }, []);

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    const item = await addItem(newItem);
    setItems([...items, item]);
    setNewItem({ name: '', stock: 0 });
  };

  const handleDeleteItem = async (id: number) => {
    await deleteItem(id);
    setItems(items.filter(item => item.id !== id));
  };

  const filteredItems = items.filter(item => {
    if (filter === 'inStock') {
      return item.stock > 0;
    } else if (filter === 'outOfStock') {
      return item.stock === 0;
    }
    return true;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl mb-4">Inventory Management</h1>
      <div className="flex justify-between mb-4">
        <select className="border p-2" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="inStock">In Stock</option>
          <option value="outOfStock">Out of Stock</option>
        </select>
      </div>
      <form onSubmit={handleAddItem} className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={newItem.stock}
          onChange={(e) => setNewItem({ ...newItem, stock: Number(e.target.value) })}
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Item
        </button>
      </form>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id} className="border p-4 mb-2">
            <div>Name: {item.name}</div>
            <div>Stock: {item.stock}</div>
            <button onClick={() => handleDeleteItem(item.id)} className="bg-red-500 text-white px-4 py-2 rounded">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryPage;
