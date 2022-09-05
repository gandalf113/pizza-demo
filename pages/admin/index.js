import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/client'
import OrderSection from '../../components/admin/OrderSection';
import ReservationSection from '../../components/admin/ReservationSection';
import MenuSection from '../../components/admin/MenuSection';
import AdminLogin from '../../components/admin/AdminLogin';
import LoadingSpinner from '../../components/ui/LoadingSpinner';


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
]

const ACTIONS = [
    {
        id: 4,
        name: "Wróć na stronę"
    },
    {
        id: 5,
        name: "Wyloguj się"
    },
]

const AdminPage = () => {
    const [openSection, setOpenSection] = useState(SECTIONS[0]);
    const router = useRouter();

    const [session, loading] = useSession();

    const renderSection = () => {
        switch (openSection.id) {
            case 1:
                return <MenuSection />
            case 2:
                return <OrderSection />
            case 3:
                return <ReservationSection />
            default:
                return null;

        }
    }

    const handleAction = (actionId) => {
        switch (actionId) {
            case 4:
                router.replace('/')
                break;
            case 5:
                signOut();
                break;
            default:
                return;
        }
    }

    if (loading) return (
        <div className='flex justify-center items-center h-screen'>
            <div className='-translate-y-8'>
                <LoadingSpinner scale='250%' />
            </div>
        </div>
    )

    if (!session) {
        return <AdminLogin />
    }

    return (
        <div className='md:flex'>
            {/* Sidebar */}
            <div className='md:fixed md:w-1/4 md:h-screen bg-green-700 space-y-2  text-white p-8'>
                {SECTIONS.map(section => (
                    <div
                        key={section.id}
                        onClick={() => setOpenSection(section)}
                        className={`cursor-pointer duration-100 hover:bg-green-800 p-3 ${openSection.id === section.id && 'bg-green-800'}`}>
                        <h5>{section.name}</h5>
                    </div>
                ))}
                <hr className='border-t border-gray-300' />
                {ACTIONS.map(action => (
                    <div
                        key={action.id}
                        onClick={() => handleAction(action.id)}
                        className={`cursor-pointer duration-100 hover:bg-green-800 p-3 ${openSection.id === action.id && 'bg-green-800'}`}>
                        <h5>{action.name}</h5>
                    </div>
                ))}
            </div>
            <div className='md:absolute p-4 md:w-3/4 md:right-0' >
                {/* <h1 className='text-3xl'>{openSection.name}</h1> */}
                <div className='my-4'>
                    {renderSection()}

                </div>
            </div>
        </div>
    )
}

export default AdminPage