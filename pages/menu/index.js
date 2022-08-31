import React, { useState } from 'react'
import Image from 'next/image'
import MenuItem from '../../components/ui/menu/MenuItem';
import CategoryItem from '../../components/ui/menu/CategoryItem';

const DUMMY_PIZZAS = [
    {
        "title": "Margaritta",
        "ingredients": "Ser",
        "price": 19.99,
    },
    {
        "title": "Cappriciosa",
        "ingredients": "Ser, Szynka",
        "price": 24.99
    },
    {
        "title": "Salami",
        "ingredients": "Ser, Salami",
        "price": 25.99
    },
    {
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



const MenuPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(DUMMY_CATEGORIES[0]);

    return (
        <div className='z-10 md:mx-12 my-6 m-auto md:px-16 py-8 bg-white'>

            <div className='flex justify-around mb-12'>
                {DUMMY_CATEGORIES.map(category => (
                    <CategoryItem category={category}
                        isActive={selectedCategory.id === category.id}
                        handleClick={() => setSelectedCategory(category)}
                    />
                ))}
            </div>
            <div>
                {selectedCategory.items.map(item => (
                    <MenuItem item={item} />
                ))}
            </div>

        </div >
    )
}

export default MenuPage