import { ActiveLink } from './ActiveLink'
import React from 'react'
import style from './Navbar.module.css'

const menuItems = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  },
];

export const Navbar = () => {

  return (
    <nav className={ style['menu-container']}>      
      {menuItems.map((menuItem, index) => {
        return (<ActiveLink key={index} text={menuItem.text} href={menuItem.href} /> ) })
      }
    </nav >
  )
}
