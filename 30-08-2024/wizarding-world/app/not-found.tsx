import Link from "next/link"
import Howler from "./assets/howler.gif"
import Image from "next/image"
export default function notFound() {
  return (
    <>
    <div className="flex flex-col justify-center items-center h-screen">
        <Image src={Howler} alt="not found" className="w-60" />
        <p>Oops! NON TROVATO! Torna alla <Link href="/" className="font-bold underline">Home</Link> SUBITO!</p>
     </div>
    </>
  )
}

