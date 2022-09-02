import React from 'react'

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

const OrderPage = () => {
  return (
    <div className='md:p-16 p-8 md:grid grid-cols-6 gap-x-12'>
      <div className='col-span-4'>
        {/* Order items */}
        {SECTIONS.map(section => (
          <div key={section.id}>
            <div className='flex items-center text-2xl gap-x-4'>
              <div className='flex items-center justify-center text-center bg-green-700 text-white w-10 h-10 aspect-square rounded-full'>{section.id}</div>
              <span className='uppercase font-light tracking-wide'>{section.title}</span>
            </div>
            <hr className='w-full border-t-2 my-4' />
          </div>
        ))}

      </div>
      {/* Summary */}
      <div className=' col-span-2'>
        <div className='flex justify-between'>
          <p>Przedmioty</p>
          <p>0.00 zł</p>
        </div>
        <div className='flex justify-between'>
          <p>Dostawa</p>
          <p>0.00 zł</p>
        </div>
        <hr className='w-full border-t-2 my-4' />
        <div className='flex justify-between'>
          <p>Razem</p>
          <p>0.00 zł</p>
        </div>
      </div>

    </div>
  )
}

export default OrderPage