import React, { useState } from 'react'
import MenuItem from '../../components/ui/menu/MenuItem';
import MenuItemModel from '../../models/menu-item';
import CategoryItem from '../../components/ui/menu/CategoryItem';
import ShoppingCartFloatingButton from '../../components/ui/menu/ShoppingCartFloatingButton';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/cartSlice';
import { toggleCartMenu } from '../../redux/uiSlice';
import connectDb from '../../utils/connect-db';


export const CATEGORIES = [
    {
        "id": 1,
        "name": "Pizza",
    },
    {
        "id": 2,
        "name": "Pasta",

    },
    {
        "id": 3,
        "name": "Sałatki",
    },
    {
        "id": 4,
        "name": "Desery",
    },
    {
        "id": 5,
        "name": "Napoje",
    },
];

const filterItemsByCategory = (menuItems, category) => {
    return menuItems.filter(item => item.category === category);
}

const getItemCount = (items) => {
    let count = 0;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        count += item.amount;
    }
    return count;
}

const MenuPage = ({ menuItems, error }) => {
    menuItems = JSON.parse(menuItems);
    const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);

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
                {CATEGORIES.map(category => (
                    <CategoryItem key={category.id} category={category}
                        isActive={selectedCategory.id === category.id}
                        handleClick={() => setSelectedCategory(category)}
                    />
                ))}
            </div>

            <div>
                {filterItemsByCategory(menuItems, selectedCategory.name).map(item => (
                    <MenuItem key={item._id} handleAddToCart={() => addItemToCart(item)} item={item} />
                ))}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    await connectDb();

    const items = await MenuItemModel.find();

    return {
        props: {
            menuItems: JSON.stringify(items),
        }
    }
}

export default MenuPage