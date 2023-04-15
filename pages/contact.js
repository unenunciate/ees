import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";

//import { useIntercom } from 'react-use-intercom';

export default function About({}) {

	//const { hide, show, update } = useIntercom();

	return (
		<div className="w-full h-full">
			<Head>
				<title>Epic Event Solutions</title>
			</Head>

			<Header />

			<section className="relative flex flex-col justify-center items-center min-h-[90vh] bg-black md:px-0 w-full py-8">
                <Image width={256} height={256} layout="fill" className="absolute top-0 z-0 flex w-full h-full blur-sm grayscale" src={`${process.env.NEXT_PUBLIC_CDN_URL}circle-event.jpg`}/>

				<h1 className="relative flex justify-center w-1/2 py-2 my-16 text-3xl font-bold text-center text-black bg-yellow-400 rounded-lg shadow-md lg:w-1/4 shadow-gray-700">Quote Request</h1>

                <div className="relative flex flex-col w-3/4 p-4 py-8 space-y-8 bg-yellow-400 rounded-lg shadow-md lg:w-1/2 md:grid-cols-4 shadow-gray-700">

                    <div className="relative">
                        <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-700 bg-transparent rounded-lg border-1 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-black focus:text-black peer" placeholder=" " />
                        <label htmlFor="floating_outlined" className="absolute text-sm text-gray-700 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-yellow-400 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Organization</label>
                    </div>
                    
                    <div className="relative">
                        <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-700 bg-transparent rounded-lg border-1 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-black focus:text-black peer" placeholder=" " />
                        <label htmlFor="floating_outlined" className="absolute text-sm text-gray-700 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-yellow-400 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Name</label>
                    </div>
                    
                    <div className="relative">
                        <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-700 bg-transparent rounded-lg border-1 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-black focus:text-black peer" placeholder=" " />
                        <label htmlFor="floating_outlined" className="absolute text-sm text-gray-700 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-yellow-400 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Phone</label>
                    </div>

                    <div className="relative">
                        <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-700 bg-transparent rounded-lg border-1 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-black focus:text-black peer" placeholder=" " />
                        <label htmlFor="floating_outlined" className="absolute text-sm text-gray-700 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-yellow-400 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                    </div>

                    <div className="relative">
                        <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-700 bg-transparent rounded-lg border-1 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-black focus:text-black peer" placeholder=" " />
                        <label htmlFor="floating_outlined" className="absolute text-sm text-gray-700 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-yellow-400 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Address</label>
                    </div>

                    <div className="relative">
                        <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-700 bg-transparent rounded-lg border-1 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-black focus:text-black peer" placeholder=" " />
                        <label htmlFor="floating_outlined" className="absolute text-sm text-gray-700 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-yellow-400 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Date</label>
                    </div>

                    <div className="relative">
                        <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-700 bg-transparent rounded-lg border-1 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-black focus:text-black peer" placeholder=" " />
                        <label htmlFor="floating_outlined" className="absolute text-sm text-gray-700 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-yellow-400 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Estimated Guests</label>
                    </div>

                    <div className="relative">
                        <input type="textarea" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-700 bg-transparent rounded-lg border-1 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-black focus:text-black peer" placeholder=" " />
                        <label htmlFor="floating_outlined" className="absolute text-sm text-gray-700 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-yellow-400 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Comments</label>
                    </div>

                    <div className="flex items-center justify-center w-full my-2">
                        <button className="px-6 py-2 font-bold text-yellow-400 bg-black rounded-lg active:scale-75">Request</button>
                    </div>
                </div>
			</section>


			<Footer/>
		</div>
	);
}

export async function getServerSideProps(context) {
	

	return {
		props: {
			
		},
	};
}
