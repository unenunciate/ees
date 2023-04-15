import Head from "next/head";

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
                <img className="absolute top-0 z-0 flex w-full h-full blur-sm grayscale" src="/circle-event.jpg"/>

				<h1 className="relative flex justify-center w-1/2 px-2 py-2 my-16 text-3xl font-bold text-center text-black bg-yellow-400 rounded-lg shadow-md lg:w-1/4 shadow-gray-700">Gallery</h1>

                <div className="relative grid w-2/3 grid-cols-2 gap-4 p-4 bg-yellow-400 rounded-lg shadow-md md:grid-cols-4 shadow-gray-700">
                    <div className="grid gap-4 ">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                        </div>
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