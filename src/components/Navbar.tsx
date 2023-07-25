'use client';
import {Button, Navbar} from 'flowbite-react';
import Link from 'next/link';
import {useRouter} from 'next/router'
import React, {useState} from 'react'
import {useAuth} from "@/context/AuthContext";

export default function NavbarWithCTAButton() {
    const {user, logout} = useAuth()
    const router = useRouter()
    return (
        <Navbar
            fluid
            rounded
        >

            <Navbar.Brand>
                <Link href="/" passHref>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Student Blockchain</span>
                </Link>
            </Navbar.Brand>
            <div className="flex md:order-2">
                {user ? (
                    <Button className="mr-2">
                        <Link href="/login" onClick={() => {
                            logout()
                            router.push("/login")
                        }}>
                            Log out
                        </Link>
                    </Button>
                ) : (
                    <>
                        <Button className="mr-2">
                            <Link href="/signup" passHref>
                                Sing In
                            </Link>
                        </Button>
                        <Button>
                            <Link href="/login" passHref>
                                login
                            </Link>
                        </Button>
                    </>
                )}
                <Navbar.Toggle/>
            </div>

            <Navbar.Collapse>
                <Navbar.Link
                    active
                    href="#"
                >
                    <p>
                        Home
                    </p>
                </Navbar.Link>
                <Navbar.Link href="#">
                    About
                </Navbar.Link>
                <Navbar.Link href="#">
                    Services
                </Navbar.Link>
                <Navbar.Link href="#">
                    Pricing
                </Navbar.Link>
                <Navbar.Link href="#">
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}


