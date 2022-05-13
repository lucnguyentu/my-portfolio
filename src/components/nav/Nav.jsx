import React, { useState } from 'react'
import "./nav.scss"
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'

const Nav = () => {
    const [active, setActive] = useState("#")

    return (
        <nav>
            <a href="#" className={active === "#" ? "active" : ""} onClick={() => setActive("#")}><AiOutlineHome /></a>
            <a href="#about" className={active === "#about" ? "active" : ""} onClick={() => setActive("#about")}><AiOutlineUser /></a>
            <a href="#experience" className={active === "#experience" ? "active" : ""} onClick={() => setActive("#experience")}><BiBook /></a>
            <a href="#services" className={active === "#services" ? "active" : ""} onClick={() => setActive("#services")}><RiServiceLine /></a>
            <a href="#contact" className={active === "#contact" ? "active" : ""} onClick={() => setActive("#contact")}><BiMessageSquareDetail /></a>
        </nav>
    )
}

export default Nav






// active ohter tags with js
// case: click into child tags, in this time, child tags will Gets a parent that is a `a` element
//  const parent = e.target.parentElement.closest("a");
// if (parent) {
//     parent.classList.add('active')
// } else {
//     // case 2: click into a, so just do as this code =))
//     e.target.classList.add('active')
// }

/*
    or: 
    const [active, setActive] = useState("#")
    
    then:
    <a href="#" className={active === "#" ? "active" : ""} onClick={() => setActive("#")}><AiOutlineHome /></a>
    <a href="#" className={active === "#about" ? "active" : ""} onClick={() => setActive("#about")}><AiOutlineHome /></a>
    ....
*/