import React from 'react'
import Maps from "./assets/maps.gif"
import Image from 'next/image'

export default function loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image src ={Maps} alt=""/>
    </div>
  )
}


