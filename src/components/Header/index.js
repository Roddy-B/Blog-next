import Link from 'next/link'

export default function Header(){
    return(
        <div className= " text-white" >
            <header className="container w-[1200px] m-auto flex justify-between items-center p-4">
                <div className="logo">
                    <h1 className="border border-neutral-700 p-4 text-red-700 text-4xl font-bold ">blb</h1>
                </div>
                <div className="search px-4">
                        <input 
                        type="text"
                        className="min-w-[380px] bg-neutral-900 border border-gray-300 rounded-md px-4 py-1 text-black
                        hidden sm:block"
                        placeholder="Search..."
                        
                        />
                </div>
                <div className="menu  justify-between">
                    <ul className='flex justify-between gap-6 transition-all duration-500 p-4 '>
                        <li className=' hover:opacity-70 pr-6 '>
                            <Link href="/dashboard">Dashboard</Link>
                        </li> 
                        <li className='hover:opacity-70 pr-6 '>
                            <Link href="/dashboard">Dashboard</Link>
                        </li> 
                        <li className='hover:opacity-70 pr-6 '>
                            <Link href="/dashboard">Dashboard</Link>
                        </li> 
                    </ul>
                </div>
            </header>
        </div>
    )
}