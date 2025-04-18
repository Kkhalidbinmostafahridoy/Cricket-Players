import React from 'react';
import logo from '../../assets/logo.png'
import { BsCoin } from "react-icons/bs";

const Header = () => {
    return (
        <div className='flex justify-between items-center px-4'>
            <img className='w-[73px] h-[72px]' src={logo} />
            <div className='flex gap-4 items-center'>
                <h1>Home</h1>
                <h1>Fixer</h1>
                <h1>Teams</h1>
                <h1>Schedules</h1>
                <button className='px-2 py-2 bg-slate-100 text-black rounded-lg gap-2'>Coin<BsCoin className='mt-[-20px] ml-14 text-red-500'></BsCoin></button>
            </div>
        </div>



    );
};

export default Header;