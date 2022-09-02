import React, { useEffect, useState } from 'react'
import { toCurrency } from '../../utils/misc-utils';

const MenuSection = () => {
    const [items, setItems] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMenu = async () => {
            const res = await fetch('/api/menu-item');
            const resData = await res.json();

            setItems(resData.items);
            setLoading(false);
        }

        fetchMenu();
    }, []);

    if (loading) return <div>Ładowanie...</div>

    return (
        <div className='overflow-x-auto relative'>
            <table className='w-full text-sm text-center text-gray-500 dark:text-gray-400'>
                <thead className='"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"'>
                    <tr>
                        <th scope='col' className='py-3 px-6'>
                            Nazwa
                        </th>
                        <th scope='col' className='py-3 px-6'>
                            Składniki
                        </th>
                        <th scope='col' className='py-3 px-6'>
                            Cena
                        </th>
                        <th scope='col' className='py-3 px-6'>
                            Kategoria
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td scope='row' className='py-3 px-6'>{item.title}</td>
                            <td scope='row' className='py-3 px-6'>{item.ingredients}</td>
                            <td scope='row' className='py-3 px-6'>{toCurrency(item.price)}</td>
                            <td scope='row' className='py-3 px-6'>{item.category}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default MenuSection