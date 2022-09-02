import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import CartItemsSection from '../../components/order/CartItemsSection';
import DeliverySection from '../../components/order/DeliverySection';
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

const OrderPage = () => {
  const [openSection, setOpenSection] = useState(2);
  const [deliveryPrice, setDeliveryPrice] = useState(6);

  const { items: cartItems } = useSelector(state => state.cart);

  const handleToggleSection = (sectionId) => {
    if (openSection === sectionId) {
      setOpenSection(-1);
    } else {
      setOpenSection(sectionId);
    }
  }

  const renderExpandedSection = (sectionId) => {
    switch (sectionId) {
      case 1:
        return <CartItemsSection items={cartItems} />
      case 2:
        return <DeliverySection handleSetDeliveryPrice={setDeliveryPrice} />
      case 3:
        return <div>BLIK? Hotpay?</div>
      default:
        return null;
    }
  }

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
        <h2 className='text-xl tracking-tight'>PODSUMOWANIE</h2>
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
      </div>

    </div>
  )
}

export default OrderPage