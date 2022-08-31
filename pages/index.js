import Image from "next/image";
import Link from 'next/link';
import PrimaryButton from "../components/ui/PrimaryButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Image src='/background_alt.jpg' alt='background' layout="fill" objectFit="cover" style={{ zIndex: -1 }}
        className='brightness-50 -z-10 select-none' />
      <div className="z-10 text-center mt-20 text-white w-1/2">
        <h1 className="text-7xl font-semibold tracking-tight">Prawdziwa pizza włoska</h1>
        <p className="text-2xl font-light my-4 px-20">Pizza z włoskiego pieca opalanego drewnem. Oryginalne, włoskie składniki. Pyszne desery.</p>
        <button className='py-4 px-6 rounded-xl text-2xl mt-8
        text-white bg-green-600 hover:bg-green-700'>
          <Link href='/'>
            Zobacz menu
          </Link>
        </button>

      </div>
    </div>
  )
}
