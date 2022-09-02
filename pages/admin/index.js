import React, { useState } from 'react'
import { useRouter } from 'next/router'
import OrderSection from '../../components/admin/OrderSection';
import ReservationSection from '../../components/admin/ReservationSection';
import MenuSection from '../../components/admin/MenuSection';

const SECTIONS = [
    {
        id: 1,
        name: "Menu"
    },
    {
        id: 2,
        name: "Zamówienia"
    },
    {
        id: 3,
        name: "Rezerwacje"
    },
    {
        id: 4,
        name: "Wróć na stronę"
    },
]

const AdminPage = () => {
    const [openSection, setOpenSection] = useState(SECTIONS[0]);
    const router = useRouter();

    const renderSection = () => {
        switch (openSection.id) {
            case 1:
                return <MenuSection />
            case 2:
                return <OrderSection />
            case 3:
                return <ReservationSection />
            case 4:
                router.replace('/')
                return <div>Nastąpi przekierowanie...</div>
            default:
                return null;

        }
    }

    return (
        <div className='md:flex'>
            {/* Sidebar */}
            <div className='md:w-1/4 md:h-screen bg-blue-700 space-y-2  text-white p-8'>
                {SECTIONS.map(section => (
                    <div
                        key={section.id}
                        onClick={() => setOpenSection(section)}
                        className={`cursor-pointer duration-100 hover:bg-blue-800 p-3 ${openSection.id === section.id && 'bg-blue-800'}`}>
                        <h5>{section.name}</h5>
                    </div>
                ))}
            </div>
            <div className='p-4 w-full' >
                <h1 className='text-3xl'>{openSection.name}</h1>
                <div className='my-4'>
                    {renderSection()}

                </div>
            </div>
        </div>
    )
}

export default AdminPage