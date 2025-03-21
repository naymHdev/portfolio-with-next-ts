'use client';

import { useRouter } from 'next/navigation';


export default function NotFound() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center space-y-4">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <h2 className="text-2xl font-semibold">Page Not Found</h2>
            <p className="text-lg text-gray-600">The page you are looking for does not exist.</p>
            <button onClick={() => router.push('/')} className='custom-bg px-4 py-2 text-white hover:scale-110 duration-300 transition-transform'>
                Go Home
            </button>
        </div>
    );
}
