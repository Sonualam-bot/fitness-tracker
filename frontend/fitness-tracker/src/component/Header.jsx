import { useEffect, useState } from 'react'
import ModalHeader from "./ModalHeader";
import NavbarHeader from "./NavbarHeader";


export const Header = ({ onHeaderComplete }) => {

    const [headerMode, setHeaderMode] = useState('modal');

    useEffect(() => {
        const timer = setTimeout(() => {
            setHeaderMode('navbar');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    // so that the rest of the contents get loaded
    useEffect(() => {
        if (headerMode === 'navbar') {
            onHeaderComplete();
        }
    }, [headerMode, onHeaderComplete]);


    return (
        <>
            {headerMode === 'modal' ? (
                <ModalHeader />
            ) : (
                <NavbarHeader />
            )}
        </>
    )
}