'use client';
import {Button, Checkbox, Label, TextInput} from 'flowbite-react';
import {useRouter} from 'next/router'
import React, {useState} from 'react'

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
    })
    const handleLogin = (e: any) => {
        e.preventDefault()
        console.log(data)
    }


    return (
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleLogin}>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="email1"
                        value="Your email"
                    />
                </div>
                <TextInput
                    id="email1"
                    placeholder="blockchain@gmail.com"
                    required
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
                        htmlFor="password1"
                        value="Your password"
                    />
                </div>
                <TextInput
                    onChange={(e: any) =>
                        setData({
                            ...data,
                            password: e.target.value,
                        })
                    }
                    value={data.password}
                    id="password1"
                    required
                    type="password"
                />
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="remember"/>
                <Label htmlFor="remember">
                    Remember me
                </Label>
            </div>
            <Button type="submit">
                Submit
            </Button>
        </form>
    )
}
export default Login;