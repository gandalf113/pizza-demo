import React, { useState } from 'react'

const BookingPage = () => {
    const [day, setDay] = useState('');
    const [hour, setHour] = useState('');
    const [numPeople, setNumPeople] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [note, setNote] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { day, hour, firstname, lastname, email, phone, num_people: numPeople, note }

        const res = await fetch('/api/reservation/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (res.status === 201) {
            alert("Pomyślnie zarezerwowano!")
        } else {
            alert("Wystąpił błąd podczas rezerwacji")
        }

        const resData = await res.json();
        console.log(resData)
    }

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="p-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Zarezerwuj stolik</h2>
                {/* <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p> */}
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className='grid grid-cols-2 gap-x-4'>
                        <div>
                            <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">Dzień</label>
                            <input type="date" id="date" onChange={(e) => setDay(e.target.value)}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" required />
                        </div>
                        <div>
                            <label htmlFor="hour" className="block mb-2 text-sm font-medium text-gray-900">Godzina</label>
                            <input type="time" id="hour" onChange={(e) => setHour(e.target.value)}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" required />
                        </div>
                    </div>
                    <div className='grid sm:grid-cols-2 gap-4'>
                        <div>
                            <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900">Imię</label>
                            <input type="text" id="firstname" onChange={(e) => setFirstname(e.target.value)}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" placeholder="Jan" required />
                        </div>
                        <div>
                            <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900">Nazwisko</label>
                            <input type="text" id="lastname" onChange={(e) => setLastname(e.target.value)}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" placeholder="Kowalski" required />
                        </div>
                    </div>
                    <div className='grid sm:grid-cols-2 gap-4'>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Adres email</label>
                            <input type="email" id="email" onChange={(e) => setEmail(e.target.value)}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" placeholder="jan.kowalski@gmail.com" required />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Numer telefonu</label>
                            <input type="text" id="phone" onChange={(e) => setPhone(e.target.value)}
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500" placeholder="123 456 789" required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="num-people" className="block mb-2 text-sm font-medium text-gray-900">Liczba osób</label>
                        <input type="number" id="num-people" onChange={(e) => setNumPeople(e.target.value)}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Uwagi</label>
                        <textarea id="message" rows="6" onChange={(e) => setNote(e.target.value)}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-green-500 focus:border-green-500" placeholder="Jeśli masz coś do dodania, możesz nas poinformować tutaj..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-700 sm:w-fit hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300">Zarezerwuj</button>
                </form>
            </div>
        </section>
    )
}

export default BookingPage