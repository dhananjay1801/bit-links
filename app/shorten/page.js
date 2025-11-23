'use client'

import { useState } from "react"
import Link from "next/link"

const Shorten = () => {
    const [url, seturl] = useState('')
    const [shorturl, setshorturl] = useState('')
    const [generated, setgenerated] = useState('')

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                alert(result.message)
                setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl('')
                setshorturl('')
            })
            .catch((error) => console.error(error));
    }

    return (
        <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-6">
            <div className="text-center">
                <h1 className="font-bold text-3xl mb-2">Generate your short URLs</h1>
                <p className="text-gray-700">Create short, shareable links in seconds</p>
            </div>
            
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">Original URL</label>
                    <input 
                        value={url} 
                        type="text" 
                        placeholder='https://example.com' 
                        onChange={(e) => seturl(e.target.value)} 
                        className="py-3 px-4 border-2 border-gray-300 focus:border-purple-500 focus:outline-none rounded-lg bg-white transition-colors" 
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">Preferred Short URL</label>
                    <input 
                        value={shorturl} 
                        type="text" 
                        placeholder='my-custom-link' 
                        onChange={(e) => setshorturl(e.target.value)} 
                        className="py-3 px-4 border-2 border-gray-300 focus:border-purple-500 focus:outline-none rounded-lg bg-white transition-colors" 
                    />
                </div>

                <button 
                    onClick={generate} 
                    disabled={!url.trim() || !shorturl.trim()}
                    className='bg-purple-600 text-white rounded-lg px-6 py-3 font-semibold hover:bg-purple-700 transition-colors mt-2 disabled:cursor-not-allowed disabled:hover:bg-gray-400'
                >
                    Generate
                </button>
            </div>

            {generated && (
                <div className="mt-4 p-4 bg-white rounded-lg border-2 border-purple-300 flex flex-col gap-3">
                    <span className="font-bold text-lg text-gray-800">Your Short Link:</span>
                    <Link 
                        href={generated} 
                        target="_blank" 
                        className="text-purple-600 hover:text-purple-700 underline break-all font-mono text-sm"
                    >
                        {generated}
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Shorten