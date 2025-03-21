'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    const router = useRouter();

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center space-y-4">
            <h1 className="text-4xl font-bold text-red-600">Something went wrong</h1>
            <p className="text-lg text-gray-600">We encountered an unexpected error. Please try again.</p>
            <div className="space-x-4">
                <button onClick={() => reset()} className=' custom-bg bg-card px-5 py-2' >
                    Try Again
                </button>
                <button onClick={() => router.push('/')} className=' custom-bg bg-card px-5 py-2'>
                    Go Home
                </button>
            </div>
        </div>
    );
}
