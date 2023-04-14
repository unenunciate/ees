import Head from "next/head";
import Link from "next/link";

import Header from "../components/Header";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';

import { useIntercom } from 'react-use-intercom';
import Footer from "../components/Footer";


export default function Home({}) {

	const { hide, show, update } = useIntercom();

	return (
		<div className="w-full h-full">
			<Head>
				<title>Epic Event Solutions</title>
			</Head>

			<Header />

			<section className="flex flex-col items-center min-h-[90vh] bg-gradient-to-tr from-gray-700 to-gray-900 md:px-0 w-full">
				<div
					className="z-0 flex w-full h-1/3 aspect-video grayscale"
				>
					<Swiper
						modules={[Navigation, Pagination]}
						slidesPerView={1}
						navigation
						pagination={{ clickable: true }}
					>
						<SwiperSlide>
							<div className="relative flex justify-center w-auto h-auto overflow-hidden grayscale">
								<video className="w-auto h-auto" autoPlay loop muted>
									<source
										src={`${process.env.NEXT_PUBLIC_CDN_URL}stage-event.mp4`}
										type="video/mp4"
									/>
								</video>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="relative flex justify-center w-auto h-auto overflow-hidden grayscale">
								<video className="w-full h-auto" autoPlay loop muted>
									<source
										src={`${process.env.NEXT_PUBLIC_CDN_URL}vote-event.mp4`}
										type="video/mp4"
									/>
								</video>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="relative flex justify-center w-auto h-auto overflow-hidden grayscale">
								<video className="w-auto h-auto" autoPlay loop muted>
									<source
										src={`${process.env.NEXT_PUBLIC_CDN_URL}corp-event.mp4`}
										type="video/mp4"
									/>
								</video>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
					
				<div className="flex justify-between w-full h-48 bg-black">
					<div className="flex flex-col items-center justify-center w-full space-y-4 text-yellow-400 lg:w-1/4">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
							<path fillRule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.54 15h6.42l.5 1.5H8.29l.5-1.5zm8.085-8.995a.75.75 0 10-.75-1.299 12.81 12.81 0 00-3.558 3.05L11.03 8.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 001.146-.102 11.312 11.312 0 013.612-3.321z" clipRule="evenodd" />
						</svg>
						<span>100+ Events</span>
					</div>
					<div className="flex flex-col items-center justify-center w-full space-y-4 text-yellow-400 lg:w-1/4">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
							<path d="M15 1.784l-.796.796a1.125 1.125 0 101.591 0L15 1.784zM12 1.784l-.796.796a1.125 1.125 0 101.591 0L12 1.784zM9 1.784l-.796.796a1.125 1.125 0 101.591 0L9 1.784zM9.75 7.547c.498-.02.998-.035 1.5-.042V6.75a.75.75 0 011.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 011.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 00-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 011.5 0v.797zM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 012.585.364 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 012.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0012 12.75zM21.75 18.131a2.604 2.604 0 00-1.915.165 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-1.915-.165v2.494c0 1.036.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494z" />
						</svg>
						<span>Est. 2011</span>
					</div>
					<div className="flex flex-col items-center justify-center w-full space-y-4 text-yellow-400 lg:w-1/4">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
							<path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
							<path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
							<path fillRule="evenodd" d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z" clipRule="evenodd" />
						</svg>

						<span>15 Event Services</span>
					</div>
				</div>

				<div className="flex items-center justify-center w-full h-auto bg-yellow-400 min-h-64">
				
					<div className="flex flex-col items-center justify-center px-2 my-6 space-y-2 text-black">
						<svg className="h-12 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"></path>
						</svg>
						
						<blockquote className="w-3/4 xl:w-1/2">"Landwind is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</blockquote>
						
						<figcaption className="flex items-center justify-center mt-6 space-x-3">
							<img className="w-6 h-6 rounded-full ring-1 ring-black" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
							<div className="flex items-center divide-x-2 divide-black ">
								<div className="pr-3 font-medium text-gray-900 ">Micheal Gough</div>
								<div className="pl-3 text-sm font-light text-gray-900">CEO at Google</div>
							</div>
						</figcaption>
					</div>
				</div>

				<div className="flex flex-col items-center justify-center w-full px-4 py-8 space-y-4 text-yellow-400 bg-black lg:py-16 lg:px-6">
					<h1 className="-ml-2 text-3xl font-bold">Gallery</h1>
					<a href="#" className="text-black bg-yellow-400 hover:bg-yellow-600 active:scale-75 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">View</a>
				</div>

				<div className="flex flex-col items-center justify-center w-full px-4 py-8 space-y-4 text-black bg-yellow-400 lg:py-16 lg:px-6">
					<h1 className="-ml-2 text-3xl font-bold">Services</h1>
					<span className="text-sm font-light text-gray-700">Custom Ordered Equipment Available</span>
					<a href="#" className="text-yellow-400 hover:text-yellow-200 bg-black active:scale-75 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">View</a>
				</div>

				<div className="flex w-full px-4 py-8 text-yellow-400 bg-black lg:py-16 lg:px-6">
					<div className="max-w-screen-sm mx-auto text-center">
						<h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight">Request a quote today</h2>
						<p className="mb-6 font-light text-yellow-200 md:text-lg">No minium purchase.</p>
						<Link href="/contact">
							<a className="text-black bg-yellow-400 hover:bg-yellow-600 active:scale-75 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Request Quote</a>
						</Link>
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
