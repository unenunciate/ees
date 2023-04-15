import { Transition } from "@headlessui/react";

import Image from "next/image";
import Link from "next/link";

import Footer from "./Footer";

import { useEffect, useRef } from "react";

const Drawer = ({ open, setOpen }) => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (backgroundRef.current !== null) {
        if (backgroundRef.current?.contains(event.target)) {
          setOpen(false);
        }
      }
    });

    return () => {
      document.removeEventListener("mousedown", (event) => {
        if (backgroundRef.current !== null) {
          if (backgroundRef.current?.contains(event.target)) {
            setOpen(false);
          }
        }
      });
    };
  }, [backgroundRef.current, setOpen, open]);
  return (
    <>
      <Transition
        show={open}
        timeout={500}
        enterFrom="translate-x-full"
        enter="duration-500 transition-translate"
        enterTo="translate-x-0"
        leaveFrom="translate-x-0"
        leave="duration-500 transition-translate"
        leaveTo="translate-x-full"
        className="fixed top-0 left-0 z-[52] justify-center w-full min-h-screen"
        as="nav"
      >
        <div className="relative flex flex-col items-center justify-between w-full min-h-screen py-6 text-yellow-400 bg-gradient-to-tr from-black via-black to-gray-900">
          <button onClick={() => setOpen(false)} className="absolute px-4 py-1 text-xl font-bold text-yellow-400 rounded cursor-pointer left-4 top-4 hover:text-yellow-600 active:scale-75">X</button>
          
          <div className="flex flex-col items-center justify-between w-full min-h-[30vh]">
            <Link href="/">
                <a className="flex w-1/3 h-auto border-2 border-yellow-600 rounded-lg shadow-md hover:ring-2 hover:ring-yellow-600 active:scale-75 hover:brightness-150 shadow-yellow-600">
                  <Image width={256} height={256} layout="responsive" src={`${process.env.NEXT_PUBLIC_CDN_URL}EES-logo.png`} className="w-full h-full rounded-lg" />
                </a>
            </Link>

           
                
            <div className="flex flex-col items-center justify-between min-h-[35vh] mt-16">
                <div className="flex flex-col space-y-8">
                  <Link href="/gallery">
                      <a className="flex px-4 py-2 my-4 rounded cursor-pointer hover:text-yellow-600 active:scale-75">
                          Gallery
                      </a>
                  </Link>

                  <Link href="/services">
                      <a className="flex px-4 py-2 my-4 rounded cursor-pointer hover:text-yellow-600 active:scale-75">
                          Services
                      </a>
                  </Link>
                </div>
            </div>

            <Link href="/contact">
							<a className="text-black bg-yellow-400 hover:bg-yellow-600 active:scale-75 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Request Quote</a>
						</Link>
          </div>

          <Footer/>
        </div>
      </Transition>
      <Transition
        show={open}
        timeout={500}
        enterFrom="opacity-0"
        enter="transition-opacity duration-500"
        enterTo="opacity-100"
        leaveFrom="opacity-100"
        leave="transition-opacity duration-500"
        leaveTo="opacity-0"
        className="fixed top-0 left-0 z-[51] justify-center w-full min-h-screen bg-black cursor-pointer"
      >
        <div
          ref={backgroundRef}
          className="flex flex-col items-center w-full min-w-full min-h-screen cursor-pointer"
        ></div>
      </Transition>
    </>
  );
};

export default Drawer;