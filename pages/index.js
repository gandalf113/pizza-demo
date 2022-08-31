import Image from "next/image";
import Link from 'next/link';
import PrimaryButton from "../components/ui/PrimaryButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Image src='/background_alt.jpg' alt='background' priority={true}
        layout="fill" objectFit="cover" style={{ zIndex: -1 }}
        className='brightness-50 -z-10 select-none' />
      <div className="z-10 text-center md:mt-20 mt-10 text-white md:w-1/2">
        <h1 className="text-8xl tracking-wider font-handwritten font-bold">Prawdziwa pizza włoska</h1>
        <p className="text-2xl font-light my-4 px-20">Pizza z włoskiego pieca opalanego drewnem. Oryginalne, włoskie składniki. Pyszne desery.</p>

        {/* Actions */}
        <Link href='/menu'>
          <button className='py-3 px-12 rounded-xl text-2xl mt-8 z-10
        text-white bg-lime-600 hover:bg-lime-700 font-serif'>
            Zobacz menu
          </button>
        </Link>


      </div>
    </div>
  )
}
