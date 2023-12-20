import React, { useState } from 'react'

import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'

import { navLinks } from '../constants'

function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <header className='padding-x py-6 w-screen z-10 absolute'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img src={headerLogo} height={29} width={130} alt="Logo" />
                </a>
                {/* Navigation links for larger screen */}
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                {/* Hamburger for smaller screen size */}
                <div className='hidden max-lg:block'>
                    <img src={hamburger} alt="Hamburger" width={24} height={24} onClick={() => setIsNavOpen((prev) => !prev)} />
                </div>
            </nav>
            {isNavOpen && (
                <div className='w-screen z-10 absolute'>
                    <ul className='flex-1 flex flex-col items-center justify-between min-h-[250px]'>
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a href={item.href} className='font-montserrat leading-3 text-slate-gray'>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Nav