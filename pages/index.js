import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion";


export default function Home() {
  return (
    <div className="flex flex-col items-center">

      <Image src='/background_alt.jpg' alt='background' priority={true}
        layout="fill" objectFit="cover" style={{ zIndex: -1 }}
        className='brightness-[0.4] -z-10 select-none' />

      <div className="z-10 text-center md:mt-20 mt-10 text-white md:w-1/2">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:text-8xl text-6xl tracking-wider font-handwritten font-bold">Prawdziwa pizza włoska</motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-light my-4 md:px-20">Pizza z włoskiego pieca opalanego drewnem. Oryginalne, włoskie składniki. Pyszne desery.</motion.p>

        {/* Actions */}
        <Link href='/menu'>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1 } }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}

            className='py-3 px-12 rounded-xl text-2xl mt-8 z-10
        text-white bg-lime-600 hover:bg-lime-700 font-serif'>
            Zobacz menu
          </motion.button>
        </Link>


      </div>
    </div>
  )
}
