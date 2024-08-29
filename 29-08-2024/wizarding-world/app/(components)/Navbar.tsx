"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"

const navitems=[
    {path:"/",value:"Home"},
    {path:"hogwarts-sorting",value:"Smistamento"},
    {path:"bestiario",value: "Il Bestiario"},
    {path:"characters",value:"Personaggi"},
    {path:"signup",value:"Iscriviti"},
    {path:"login",value:"Accedi"},
]

export default function Navbar() {
    const pathname= usePathname();
  return (
    <div>
        <ul className="flex gap-2">
            {navitems.map((item,index)=>{
                return(
                    <li className={`${pathname===item.path && "underline"}`}
                    key={"id-"+index}>
                        <Link href={item.path}>{item.value}</Link>
                    </li>
                )
            })}
            
        </ul>
      
    </div>
  )
}


