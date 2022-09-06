import React, { Fragment, useEffect, useState } from 'react'
import { getPriceSum, getTotalSum } from '../../utils/cart-utils';
import { parseISOString, timestampToReadableString } from '../../utils/misc-utils';

const OrderSection = () => {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState();

    useEffect(() => {
        const fetchOrders = async () => {
            setLoading(true);
            const res = await fetch('/api/order');

            const resData = await res.json();

            setOrders(resData.orders);
            setLoading(false);
        }
        fetchOrders();
    }, []);

    const getAddress = (order) => {
        return order.delivery ? order.address.street + " " + order.address.local : '-'
    }

    if (loading) return <div>Ładowanie...</div>

    if (!orders) return <div>Brak zamówień</div>

    return (
        <Fragment>
            <h1 className='text-3xl mb-4'>Zamówienia</h1>

            <div className='overflow-x-auto relative'>
                <table className='w-full text-sm text-center text-gray-500 dark:text-gray-400'>
                    <thead className='"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"'>
                        <tr>
                            <th scope='col' className='py-3 px-6'>
                                Numer telefonu
                            </th>
                            <th scope='col' className='py-3 px-6'>
                                Dowóz?
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
                            <th scope='col' className='py-3 px-6'>
                                Czas zamówienia
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id}>
                                <td scope='row' className='py-3 px-6'>{order.phone_number}</td>
                                <td scope='row' className='py-3 px-6'>{order.delivery ? "TAK" : "NIE"}</td>
                                <td scope='row' className='py-3 px-6'>
                                    {getAddress(order)}
                                </td>
                                <td scope='row' className='py-3 px-6'>{order.items.map(item => <div key={item._id}>
                                    {item.item.title} x{item.amount}
                                </div>)}</td>
                                <td scope='row' className='py-3 px-6'>{getTotalSum(order.items, order.delivery)} zł</td>
                                <td scope='row' className='py-3 px-6'>
                                    {parseISOString(order.ordered_on).toLocaleDateString()}
                                    <br/>
                                    {parseISOString(order.ordered_on).toLocaleTimeString()}
                                    </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </Fragment>

    )
}

export default OrderSection