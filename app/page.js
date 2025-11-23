import Image from "next/image";
import Link from "next/link";

export default function Home() {

    return (
        <main className="bg-purple-100 flex-1 flex items-center">
            <section className="container mx-auto px-10 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                            The best URL Shortener in the market.
                        </h1>
                        <p className="text-base text-gray-700">
                            We provide the most straightforward URL shortening service in the world.
                        </p>
                        <p className="text-base text-gray-700">
                            No Ads, No Log In, just click and generate.
                        </p>
                        <div className='pt-2'>
                            <Link
                                href='/shorten'
                                className='bg-purple-600 text-white rounded-lg px-6 py-3 font-semibold hover:bg-purple-700 transition-colors inline-block'
                            >
                                Try Now
                            </Link>
                        </div>
                    </div>

                    <div className="relative h-[300px] md:h-[350px]">
                        <Image
                            src={'/vector.jpg'}
                            fill={true}
                            alt="An image of a vector"
                            className="object-cover rounded-lg"
                            priority
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
