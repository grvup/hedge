import axios from 'axios';

export const fetchOrders = async () => {
  const res = await axios.get('http://localhost:5000/api/orders');
  return res.data;
};

export const fetchItems = async () => {
  const res = await axios.get('http://localhost:5000/api/items');
  return res.data;
};

export const updateOrderStatus = async (id: number, status: string) => {
  const res = await axios.put(`http://localhost:5000/api/orders/${id}`, { status });
  return res.data;
};

export const addItem = async (item: { name: string, stock: number }) => {
  const res = await axios.post('http://localhost:5000/api/items', item);
  return res.data;
};

export const deleteItem = async (id: number) => {
  await axios.delete(`http://localhost:5000/api/items/${id}`);
};
