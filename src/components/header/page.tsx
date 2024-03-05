import Link from "next/link"
import { FiUser, FiLogOut } from "react-icons/fi"

export function Header(){
    return(
        <header className="w-full flex items-center px-2 py-4 bg-white h-20 shadow-md">
            <div className="w-full flex items-center justify-between max-w-7xl mx-auto p-5" >
                <Link href="/">
                    <h1 className="font-bold text-3xl pl-1 ">
                        <span className="text-blue-500 hover:tracking-widest duration-300">Dev</span> CONTROLE
                    </h1>
                </Link>

                <div className="flex gap-2 items-baseline">
                    <Link href="/dashboard">
                        <FiUser size={26} color="#4b5563" />
                    </Link>

                    <button>
                        <FiLogOut size={26} color="#4b5563" />
                    </button>
                </div>
            </div>

        </header>
    )
}