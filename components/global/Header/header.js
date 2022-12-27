import Head from 'next/head';
import { TopHeader } from './components/topHeader';
import { BottomHeader } from './components/bottomHeader';
export function Header(){
    return(
        <header id='header' className='header'>
            <TopHeader />
            <BottomHeader />
        </header>
    )
}