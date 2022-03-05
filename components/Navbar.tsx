
import { FC } from "react";
import ActiveLink from "./ActiveLink";
import styles from './Navbar.module.css'


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

// Ya que next js no tiene una propiedad que nos indique en que link nos encontramos, usamos nuestro propio Custom Active Link
const Navbar: FC = () => {
  return (
    <nav className={styles['menu-container']}>
      {
        menuItems.map(({ text, href}) => (
          <ActiveLink key={text} href={href} text={text} />
        ))
      }
      {/* <ActiveLink text='Home' href='/' />
      <ActiveLink text='About' href='/about' />
      <ActiveLink text='Contact' href='/contact'/> */}
    </nav>
  )
}

export default Navbar