import { useState, useEffect } from 'react';
import { fetchOrders } from '../../utils/api';

type Order = {
  id: number;
  customer: string;
  status: string;
  items: { id: number; name: string; quantity: number; }[];
};

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    const getOrders = async () => {
      const orders = await fetchOrders();
      setOrders(orders);
    };
    getOrders();
  }, []);

  const filteredOrders = orders.filter(order => filter ? order.status === filter : true);
  const sortedOrders = filteredOrders.sort((a, b) => {
    if (sort === 'customer') {
      return a.customer.localeCompare(b.customer);
    } else if (sort === 'itemCount') {
      return a.items.length - b.items.length;
    }
    return 0;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <h1 className="text-xl mb-4">Orders</h1>
      <div className="flex justify-between mb-4">
        <select className="border p-2" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <select className="border p-2" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort by</option>
          <option value="customer">Customer</option>
          <option value="itemCount">Item Count</option>
        </select>
      </div>
      <ul>
        {sortedOrders.map(order => (
          <li key={order.id} className="border p-4 mb-2">
            <div>Order ID: {order.id}</div>
            <div>Customer: {order.customer}</div>
            <div>Status: {order.status}</div>
            <div>Item Count: {order.items.length}</div>
            <a href={`/orders/${order.id}`} className="text-blue-500">View Details</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersPage;
