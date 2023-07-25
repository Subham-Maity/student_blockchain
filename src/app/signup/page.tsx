'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import {useState} from "react";

const Signup = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
        repeatPassword: '', // add a state variable for repeat password
    })
    const [error, setError] = useState('') // add a state variable for error message

    const handleSignup = async (e: any) => {
        e.preventDefault()
        // add a function to check if passwords match and are not empty
        if (data.password === data.repeatPassword && data.password !== '') {
            console.log(data)
            setError('') // clear the error message
        } else {
            setError('Passwords do not match or are empty.') // set the error message
        }
    }
    return (
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSignup}>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="email2"
                        value="Your email"
                    />
                </div>
                <TextInput
                    id="email2"
                    placeholder="name@flowbite.com"
                    required
                    shadow
                    type="email"
                    onChange={(e: any) =>
                        setData({
                            ...data,
                            email: e.target.value,
                        })
                    }
                    value={data.email}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="password2"
                        value="Your password"
                    />
                </div>
                <TextInput
                    id="password2"
                    required
                    shadow
                    type="password"
                    onChange={(e: any) =>
                        setData({
                            ...data,
                            password: e.target.value,
                        })
                    }
                    value={data.password}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="repeat-password"
                        value="Repeat password"
                    />
                </div>
                <TextInput
                    id="repeat-password"
                    required
                    shadow
                    type="password"
                    onChange={(e: any) =>
                        setData({
                            ...data,
                            repeatPassword: e.target.value, // update the repeat password state variable
                        })
                    }
                    value={data.repeatPassword}
                />
            </div>
            {/* add a div to display the error message */}
            <div className="text-red-600">
                {error}
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="agree" />
                <Label
                    className="flex"
                    htmlFor="agree"
                >
                    <p>
                        I agree with the
                    </p>
                    <div
                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                        // href="/forms"
                    >
                        <p>
                            terms and conditions
                        </p>
                    </div>
                </Label>
            </div>
            <Button type="submit">
                Register new account
            </Button>
        </form>
    )
}
export default Signup;

