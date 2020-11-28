import React,{useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn} from './HeroElements'

export const Hero=() =>{
    const [isOpen,setIsOpen] = useState(false)

    const toggle =()=>{
setIsOpen(!isOpen)
    }

    return (
      
        <HeroContainer>
<Navbar toggle={toggle}/>
<Sidebar isOpen={isOpen} toggle={toggle}/>
<HeroContent>
    <HeroItems>
        <HeroH1>Selling My Tech Skills</HeroH1>
        <HeroP>One stop for all a that</HeroP>
        <HeroBtn>Request service</HeroBtn>
        </HeroItems>
    </HeroContent>
            </HeroContainer>


    );
};

export default Hero
