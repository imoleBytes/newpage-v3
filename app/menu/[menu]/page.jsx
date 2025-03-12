"use client"
import { useParams } from 'next/navigation';
import React from 'react';
import HelperComponent from '../../components/HelperComponent';


const Page = () => {
    const {menu} = useParams()
    return (
            <HelperComponent menu={menu}/>
    );
}

export default Page;
