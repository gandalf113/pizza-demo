import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import { toggleNewItemMenu } from '../../../redux/uiSlice';
import { AiOutlineClose } from 'react-icons/ai';

const NewMenuItem = () => {
    const { isNewItemMenuOpen: isOpen } = useSelector(state => state.ui);

    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    const dispatch = useDispatch();

    const handleClose = () => dispatch(toggleNewItemMenu(false));

    const validateForm = () => {
        return name.trim() !== '' && ingredients.trim() !== '' && price > 0 !== '' && category.trim() !== ''
    }

    const handleAddItem = (e) => {
        e.preventDefault();
    }

    return (
        <Sidebar title='Dodaj nową potrawę' isOpen={isOpen} handleClose={handleClose}>
            {/* Heading */}
            <div className='flex items-end justify-between mb-4'>
                <h2 className='text-xl'>Nowa potrawa</h2>
                <button onClick={handleClose}>
                    <AiOutlineClose size={24} />
                </button>
            </div>
            {/* Form */}
            <form onSubmit={handleAddItem} className='space-y-4'>
                <div className='grid grid-cols-4 gap-x-6'>
                    <label htmlFor='item-name'>Nazwa</label>
                    <input id='item-name' name='item-name' placeholder='Margheritta'
                        className='p-1 border border-gray-300 col-span-3'
                        value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className='grid grid-cols-4 gap-x-6'>
                    <label htmlFor='item-ingredients'>Składniki</label>
                    <input id='item-ingredients' name='item-ingredients' placeholder='Ser, szynka, pieczarki...'
                        className='p-1 border border-gray-300 col-span-3'
                        value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
                </div>
                <div className='grid grid-cols-4 gap-x-6'>
                    <label htmlFor='item-price'>Cena</label>
                    <input id='item-price' name='item-price' placeholder='0.00 zł'
                        type='number' step={0.10} min={0} className='p-1 border border-gray-300 col-span-3'
                        value={price} onChange={(e) => setPrice(e.target.value)} required />
                </div>
                <div className='grid grid-cols-4 gap-x-6'>
                    <label htmlFor='item-category'>Kategoria</label>
                    <input id='item-category' name='item-category' placeholder='Pizza'
                        className='p-1 border border-gray-300 col-span-3'
                        value={category} onChange={(e) => setCategory(e.target.value)} required />
                </div>
                <button type='submit' className={`w-full p-4 text-white
                ${validateForm() ? 'bg-blue-600' : 'bg-gray-300'}`} disabled={!validateForm()}>Dodaj</button>
            </form>
        </Sidebar>
    )
}

export default NewMenuItem