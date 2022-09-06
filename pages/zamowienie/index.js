import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartItemsSection from '../../components/order/CartItemsSection';
import DeliverySection from '../../components/order/DeliverySection';
import { addItem, decrementItem } from '../../redux/cartSlice';
import { getPriceSum } from '../../utils/cart-utils';

const SECTIONS = [
  {
    id: 1,
    title: "Zamówienie"
  },
  {
    id: 2,
    title: "Sposób dostawy"
  },
  {
    id: 3,
    title: "Metoda płatności"
  },
];

/**
 *
 * @param {Number} itemsSum
 * @param {Number} deliveryPrice
 * @returns
 */
const getTotalOrderPrice = (itemsSum, deliveryPrice) => {
  return Number.parseFloat(itemsSum) + Number.parseFloat(deliveryPrice);
}

/**
 * @param {Array} items
 */
const preparePayload = (items) => {
  return items.map(item => ({
    item: item.item.id,
    amount: item.amount
  }))
}

const OrderPage = () => {
  const dispatch = useDispatch();

  const [openSection, setOpenSection] = useState(2);
  const [deliveryMethod, setDeliveryMethod] = useState(1);

  const [street, setStreet] = useState('');
  const [local, setLocal] = useState('');
  const [phone, setPhone] = useState('');

  const { items: cartItems } = useSelector(state => state.cart);

  const handleToggleSection = (sectionId) => {
    if (openSection === sectionId) {
      setOpenSection(-1);
    } else {
      setOpenSection(sectionId);
    }
  }

  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }

  const handleRemoveSingleItem = (item) => {
    dispatch(decrementItem(item))
  }

  const validateForm = () => {
    return (deliveryMethod === 2 || street && local && street.trim !== '' && local.trim !== '') && phone && phone.trim !== ''
      && cartItems.length > 0
  }


  const placeOrder = async () => {
    const items = preparePayload(cartItems);
    const address = {
      street: street,
      local: local
    }

    const delivery = deliveryMethod === 1

    const phone_number = phone
    const data = { delivery, items, address, phone_number }

    const res = await fetch('/api/order/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (res.status === 201) {
      alert("Pomyślnie złożono zamówienie!")
    } else {
      alert("Wystąpił błąd podczas składania zamówienia")
    }

    const resData = await res.json();
    console.log(resData)
  }

  const renderExpandedSection = (sectionId) => {
    switch (sectionId) {
      case 1:
        return <CartItemsSection items={cartItems} addItem={handleAddItem} removeSingleItem={handleRemoveSingleItem} />
      case 2:
        return <DeliverySection deliveryMethod={deliveryMethod} setDeliveryMethod={setDeliveryMethod}
          setStreet={setStreet} setLocal={setLocal} setPhone={setPhone}
          street={street} local={local} phone={phone} />
      case 3:
        return <div>Tutaj będzie można wybrać metodę płatności (Przy odbiorze, BLIK, Przelewy24 itd.)</div>
      default:
        return null;
    }
  }

  const deliveryPrice = deliveryMethod === 1 ? 6 : 0;

  const itemsPrice = getPriceSum(cartItems);
  const totalPrice = getTotalOrderPrice(itemsPrice, deliveryPrice);

  return (
    <div className='md:p-16 p-8 md:grid grid-cols-6 gap-x-12'>
      <div className='col-span-4'>
        {/* Sections */}
        {SECTIONS.map(section => (
          <div key={section.id}>
            {/* Section heading */}
            <div
              onClick={() => handleToggleSection(section.id)}
              className='flex items-center text-2xl gap-x-4 cursor-pointer'>
              <div className='flex items-center justify-center text-center bg-green-700 text-white w-10 h-10 aspect-square rounded-full'>{section.id}</div>
              <span className='uppercase font-light tracking-wide'>{section.title}</span>
            </div>
            {/* Section expanded */}
            {openSection === section.id && <div className='px-14 py-3'>
              {renderExpandedSection(section.id)}
            </div>}
            <hr className='w-full border-t-2 my-4' />
          </div>
        ))}


      </div>
      {/* Summary */}
      <div className='col-span-2'>
        <h2 className='text-xl tracking-tight mb-2'>PODSUMOWANIE</h2>
        <div className='flex justify-between'>
          <p>Przedmioty</p>
          <p>{itemsPrice} zł</p>
        </div>
        <div className='flex justify-between'>
          <p>Dostawa</p>
          <p>{deliveryPrice.toFixed(2)} zł</p>
        </div>
        <hr className='w-full border-t-2 my-4' />
        <div className='flex justify-between'>
          <p>Razem</p>
          <p>{totalPrice} zł</p>
        </div>
        <button
          onClick={placeOrder}
          className={`my-6 w-full text-white p-4 rounded-sm
        ${validateForm() ? 'bg-green-600 hover:bg-green-700' : 'bg-neutral-300'}`}
          disabled={!validateForm()}>Zamów</button>
      </div>

    </div>
  )
}

export default OrderPage