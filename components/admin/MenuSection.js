import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleEditItemMenu, toggleNewItemMenu } from '../../redux/uiSlice';
import { toCurrency } from '../../utils/misc-utils';
import { MdEdit } from 'react-icons/md';
import { MenuContext } from '../../context/menu-context';

const MenuSection = () => {
    const dispatch = useDispatch();

    const { menuItems: items, reloadMenuItems, loading, error } = useContext(MenuContext);

    useEffect(() => {
        reloadMenuItems();
    }, []);

    if (loading) return <div>Ładowanie...</div>

    return (
        <Fragment>
            <div className='flex justify-between mb-4'>
                <h1 className='text-3xl'>Menu</h1>
                <button
                    onClick={() => dispatch(toggleNewItemMenu(true))}
                    className='p-2 mb-4 bg-blue-600 rounded text-white'>Nowa potrawa</button>
            </div>

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
                            <th scope='col' className='py-3 px-6'>
                                Edytuj
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {!error ? items.map(item => (
                            <tr key={item.id}>
                                <td scope='row' className='py-3 px-6'>{item.title}</td>
                                <td scope='row' className='py-3 px-6'>{item.ingredients}</td>
                                <td scope='row' className='py-3 px-6'>{toCurrency(item.price)}</td>
                                <td scope='row' className='py-3 px-6'>{item.category}</td>
                                <td>
                                    <button onClick={() => dispatch(toggleEditItemMenu([true, item]))}><MdEdit size={20} /></button>
                                </td>
                            </tr>
                        )) :
                        <h5 className='text-red-500'>{error}</h5>
                        }

                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default MenuSection