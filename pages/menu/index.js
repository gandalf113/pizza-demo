import React, { useState } from 'react'
import Image from 'next/image'
import MenuItem from '../../components/ui/menu/MenuItem';
import CategoryItem from '../../components/ui/menu/CategoryItem';
import ShoppingCartFloatingButton from '../../components/ui/menu/ShoppingCartFloatingButton';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/cartSlice';
import { toggleCartMenu } from '../../redux/uiSlice';

const DUMMY_PIZZAS = [
    {
        "id": 1,
        "title": "Margaritta",
        "ingredients": "Ser",
        "price": 19.99,
    },
    {
        "id": 2,
        "title": "Cappriciosa",
        "ingredients": "Ser, Szynka",
        "price": 24.99
    },
    {
        "id": 3,
        "title": "Salami",
        "ingredients": "Ser, Salami",
        "price": 25.99
    },
    {
        "id": 4,
        "title": "Havaii",
        "ingredients": "Ser, Szynka, Ananas",
        "price": 28.99
    },
]
const DUMMY_CATEGORIES = [
    {
        "id": 1,
        "name": "Pizza",
        "items": DUMMY_PIZZAS,
    },
    {
        "id": 2,
        "name": "Makarony",
        "items": []

    },
    {
        "id": 3,
        "name": "Sałatki",
        "items": []
    },
    {
        "id": 4,
        "name": "Desery",
        "items": []
    },
    {
        "id": 5,
        "name": "Napoje",
        "items": []
    },
];

const getItemCount = (items) => {
    let count = 0;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        count += item.amount;
    }
    return count;
}

const MenuPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(DUMMY_CATEGORIES[0]);

    const { items } = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const addItemToCart = (item) => {
        dispatch(addItem(item));
    }



    const openCart = () => {
        dispatch(toggleCartMenu(true));
    }

    return (
        <div className='z-10 md:mx-12 my-6 m-auto md:px-16 py-8 bg-white'>
            <ShoppingCartFloatingButton onClick={openCart} count={getItemCount(items)} />
            <div className='flex justify-around mb-12'>
                {DUMMY_CATEGORIES.map(category => (
                    <CategoryItem key={category.id} category={category}
                        isActive={selectedCategory.id === category.id}
                        handleClick={() => setSelectedCategory(category)}
                    />
                ))}
            </div>
            <div>
                {selectedCategory.items.map(item => (
                    <MenuItem key={item.id} handleAddToCart={() => addItemToCart(item)} item={item} />
                ))}
            </div>

        </div >
    )
}

export default MenuPage