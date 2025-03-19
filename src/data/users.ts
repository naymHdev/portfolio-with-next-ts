export interface IUser {
    id?: string;
    email: string;
    password: string;
}

const users: IUser[] = [
    {
        email: "naymhossen09@gmail.com",
        password: "123456",
    },
    {
        email: "dashboardadmin@gmail.com",
        password: "dashboardadmin",
    },
];

export const getUserByEmail = (email: string): IUser | undefined => {
    return users.find((user) => user.email === email);
};
