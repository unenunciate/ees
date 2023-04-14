import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { useIntercom } from 'react-use-intercom';

export default function About({}) {

	const { hide, show, update } = useIntercom();

	return (
		<div className="w-full h-full">
			<Head>
				<title>Epic Event Solutions</title>
			</Head>

			<Header />

			<section className="flex flex-col items-center min-h-[90vh] bg-gradient-to-tr from-gray-700 to-gray-900 md:px-0 w-full">
				
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