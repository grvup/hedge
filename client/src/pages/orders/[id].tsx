import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { fetchOrders, updateOrderStatus } from '../../utils/api';

type Item = {
  id: number;
  name: string;
  quantity: number;
};

type Order = {
  id: number;
  customer: string;
  status: string;
  items: Item[];
};

const OrderDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const getOrder = async () => {
      const orders = await fetchOrders();
      const order = orders.find((order: Order) => order.id === Number(id));
      setOrder(order);
    };
    if (id) getOrder();
  }, [id]);

  const markAsCompleted = async () => {
    if (order) {
      const updatedOrder = await updateOrderStatus(order.id, 'Completed');
      setOrder(updatedOrder);
    }
  };

  if (!order) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Order Details</h1>
      <div className="bg-white shadow-md rounded-md p-4">
        <div className="font-bold">Order ID: {order.id}</div>
        <div className="mb-2">Customer: {order.customer}</div>
        <div className="mb-2">Status: {order.status}</div>
        <div className="mb-2">
          Items:
          <ul className="list-disc pl-4">
            {order.items.map((item) => (
              <li key={item.id}>
                {item.name} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
        </div>
        {order.status === 'Pending' && (
          <button
            onClick={markAsCompleted}
            className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Mark as Completed
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderDetailsPage;
