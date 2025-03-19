'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { docredentialLogin } from '@/actions/docredentialLogin';


const LoginForm = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {

            const formData = new FormData(e.currentTarget);
            const result = await docredentialLogin(formData);

            // console.log('result auth', result);

            if (result?.error) {
                setError(result.error);
            } else {
                router.push('/dashboard');
                setLoading(false);
            }

        } catch (error: any) {
            // console.log("error", error);
            setError(error);
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6  rounded-lg">
            {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="email"
                    name="email"
                    id='email'
                    placeholder="Email"
                    className="w-full px-3 py-2 border custom-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="password"
                    name="password"
                    id='password'
                    placeholder="Password"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    disabled={loading}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
