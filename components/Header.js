import Link from "next/link";
import Image from "next/image";

import Headroom from "react-headroom";

import Drawer from './Drawer';
import { useState } from 'react';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
            <>
                <Headroom>
                <header className="flex relative z-20 w-full px-4 py-2 text-white bg-black border-b-2 border-yellow-400 shadow-lg shadow-gray-400 h-[10vh]">
                    <div className="flex flex-row justify-between w-full h-full">
                        <div className="flex items-center w-1/4 h-full">
                            <Link href="/" >
                                <a className="flex items-center h-full px-6 rounded-lg hover:brightness-75 active:scale-75"><Image width={64} height={64} src={`${process.env.NEXT_PUBLIC_CDN_URL}EESAlpha.png`} layout="fixed" /></a>
                            </Link>
                        </div>

                        <nav className={`flex-row flex w-1/2 items-center justify-center h-full`}>
                            
                        </nav>

                        <div className='flex items-center justify-end w-1/4 h-full'>
                            <div className='relative flex items-center justify-end w-full px-2 space-x-4 h-max'>
                                
                                
                                <button onClick={() => setOpen(true)} className="flex items-center justify-center px-6 py-4 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black active:scale-75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="feather feather-menu"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M3 12L21 12"></path>
                                        <path d="M3 6L21 6"></path>
                                        <path d="M3 18L21 18"></path>
                                    </svg>
                                </button>

                            
                            </div>
                        </div>
                    </div>
                </header>
                </Headroom>
                <Drawer open={open} setOpen={setOpen} />
            </>
        );
}

export default Header;