import React, { Fragment, useEffect, useState } from 'react'
import { getPriceSum } from '../../utils/cart-utils';

const ReservationSection = () => {
    const [loading, setLoading] = useState(true);
    const [reservations, setReservations] = useState();

    useEffect(() => {
        const fetchReservations = async () => {
            setLoading(true);
            const res = await fetch('/api/reservation');

            const resData = await res.json();

            setReservations(resData.reservations);
            setLoading(false);
        }
        fetchReservations();
    }, []);

    if (loading) return <div>Ładowanie...</div>

    if (!reservations) return <div>Brak rezerwacji</div>

    return (
        <Fragment>
            <h1 className='text-3xl mb-4'>Rezerwacje</h1>

            <div className='overflow-x-auto relative'>
                <table className='w-full text-sm text-center text-gray-500 dark:text-gray-400'>
                    <thead className='"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"'>
                        <tr>
                            <th scope='col' className='py-3 px-6'>
                                Data i godzina
                            </th>
                            <th scope='col' className='py-3 px-6'>
                                Imię i nazwisko
                            </th>
                            <th scope='col' className='py-3 px-6'>
                                Numer telefonu
                            </th>
                            <th scope='col' className='py-3 px-6'>
                                Email
                            </th>
                            <th scope='col' className='py-3 px-6'>
                                Liczba osób
                            </th>
                            <th scope='col' className='py-3 px-6'>
                                Notatka
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map(reservation => (
                            <tr key={reservation.id}>
                                <td scope='row' className='py-3 px-6'>{reservation.day} <br /> {reservation.hour}</td>
                                <td scope='row' className='py-3 px-6'>{reservation.firstname} {reservation.lastname}</td>
                                <td scope='row' className='py-3 px-6'>{reservation.phone}</td>
                                <td scope='row' className='py-3 px-6'>{reservation.email}</td>
                                <td scope='row' className='py-3 px-6'>{reservation.num_people}</td>
                                <td scope='row' className='py-3 px-6'>{reservation.note || '-'}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </Fragment>

    )
}

export default ReservationSection