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
        <div className="max-w-md mx-auto mt-5">
            {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="email"
                    name="email"
                    id='email'
                    placeholder="Email"
                    className="w-full px-3 py-2 border-none rounded-lg focus:outline-none bg-transparent custom-bg"
                    required
                />
                <input
                    type="password"
                    name="password"
                    id='password'
                    placeholder="Password"
                    className="w-full px-3 py-2 border-none rounded-lg focus:outline-none bg-transparent custom-bg"
                    required
                />
                <button
                    type="submit"
                    className="rounded-lg px-12 py-2 font-semibold custom-bg text-title hover:scale-110 hover:transition-all"
                    disabled={loading}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
