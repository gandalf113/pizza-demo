import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import { toggleEditItemMenu, toggleNewItemMenu } from '../../../redux/uiSlice';
import { AiOutlineClose } from 'react-icons/ai';
import LoadingSpinner from '../../ui/LoadingSpinner';

const EditMenuItem = () => {
    const { isEditItemMenuOpen: isOpen, currentlyEditedMenuItem: item } = useSelector(state => state.ui);

    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        if (Object.keys(item).length > 0) {
            setName(item.title);
            setIngredients(item.ingredients);
            setPrice(item.price);
            setCategory(item.category);
        }
    }, [isOpen])

    const dispatch = useDispatch();

    const handleClose = () => dispatch(toggleEditItemMenu([false, {}]));

    const validateForm = () => {
        return name.trim() !== '' && ingredients.trim() !== '' && Number.parseFloat(price) > 0 && category.trim() !== ''
    }

    const handleDelete = async () => {
        const res = await fetch(`/api/menu-item/${item._id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (res.status === 200) {
            handleClose();
        } else {
            setError({ message: 'Wystąpił błąd podczas usuwania potrawy!' })
        }
    }

    const handleUpdateItem = async (e) => {
        e.preventDefault();

        setLoading(true);

        const data = { title: name, ingredients, price, category }

        const res = await fetch(`/api/menu-item/${item._id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (res.status === 200) {
            handleClose();
        } else {
            setError({ message: 'Wystąpił błąd podczas edycji potrawy!' })
        }

        setLoading(false);
    }

    return (
        <Sidebar title='Dodaj nową potrawę' isOpen={isOpen} handleClose={handleClose}>
            {/* Heading */}
            <div className='flex items-end justify-between mb-4'>
                <h2 className='text-xl'>Edytuj potrawę</h2>
                <button onClick={handleClose}>
                    <AiOutlineClose size={24} />
                </button>
            </div>
            {/* Form */}
            <form onSubmit={handleUpdateItem} className='space-y-4'>
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

                <button type='submit' className={`w-full p-4 text-white flex items-center justify-center gap-x-4
                ${validateForm() ? 'bg-green-600' : 'bg-gray-300'}`} disabled={!validateForm()}>
                    <span>Zapisz</span>
                    {loading && <LoadingSpinner />}
                </button>
                <button type='button' onClick={handleDelete} className='w-full p-4 text-white bg-red-400 flex items-center justify-center gap-x-4'>
                    <span>Usuń</span>
                </button>
                {error && <p className='text-red-600'>{error.message}</p>}
            </form>
        </Sidebar>
    )
}

export default EditMenuItem