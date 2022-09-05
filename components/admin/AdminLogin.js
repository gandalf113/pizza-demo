import Link from 'next/link'
import { signin } from 'next-auth/client'
import LoadingSpinner from '../ui/LoadingSpinner';
import React, { useState } from 'react'

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        const result = await signin('credentials', {
            redirect: false,
            email: email,
            password: password
        });

        if (result.error) {
            setError(result.error);
        } else {

        }

        setLoading(false);

        console.log(result)
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link href="/">
                    <div className="flex items-center mb-6 text-4xl font-semibold font-handwritten text-gray-900 cursor-pointer">
                        <img className="w-8 h-8 mr-2" src={'/logo_real.png'} alt="logo" />
                        Emiliga Romagna
                    </div>
                </Link>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Zaloguj się do panelu admina
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Adres email</label>
                                <input type="email" name="email" id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                                focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                                    value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@example.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Hasło</label>
                                <input type="password" name="password" id="password" placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                                focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                                    value={password} onChange={(e) => setPassword(e.target.value)} required="" />
                            </div>
                            {error && <p className='text-red-600'>{error}</p>}
                            <button type="submit" className="flex items-center justify-center gap-x-2 w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                Zaloguj się
                                {loading && <LoadingSpinner />}
                            </button>
                            <Link href='/'>
                                <p className='w-full text-center text-gray-500 cursor-pointer'>Wróć na stronę</p>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminLogin