import React, { useEffect, useState } from 'react'

const OrderSection = () => {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState();

    useEffect(() => {
        const fetchOrders = async () => {
            setLoading(true);
            const res = await fetch('/api/order');

            const resData = await res.json();
            console.log(resData)
            setOrders(resData.orders);
            setLoading(false);
        }
        fetchOrders();
    }, []);

    if (loading) return <div>Ładowanie...</div>

    return (
        <div className='overflow-x-auto relative'>
            <table className='w-full text-sm text-center text-gray-500 dark:text-gray-400'>
                <thead className='"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"'>
                    <tr>
                        <th scope='col' className='py-3 px-6'>
                            Numer telefonu
                        </th>
                        <th scope='col' className='py-3 px-6'>
                            Adres
                        </th>
                        <th scope='col' className='py-3 px-6'>
                            Zamówienie
                        </th>
                        <th scope='col' className='py-3 px-6'>
                            Kwota
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td scope='row' className='py-3 px-6'>{order.phone_number}</td>
                            <td scope='row' className='py-3 px-6'>{order.address.street} {order.address.local}</td>
                            <td scope='row' className='py-3 px-6'>{order.items.map(item => <div key={item._id}>
                                {item.itemId} x {item.amount}
                            </div>)}</td>
                            <td scope='row' className='py-3 px-6'>00.00 zł</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default OrderSection