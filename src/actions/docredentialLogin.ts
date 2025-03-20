import { signIn } from "next-auth/react";


export async function docredentialLogin(formData: FormData) {
    try {

        const response = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),

            redirect: false,
        });

        if (response?.error) {
            throw new Error(response.error); // Log the error from next-auth
        }

        return response;

    } catch (error: any) {
        // console.error("Login error: ", error);
        throw new Error(error instanceof Error ? error.message : "Login failed");
    }
}