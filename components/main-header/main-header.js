import logoimage from '@/assets/logo.png'
import Link from 'next/link'
import classes from './main-header.module.css'
import Image from 'next/image'
import MainHeaderBackground from './main-header-background'

export default function Header() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoimage} alt="LOGO PIZZA PASTE" priority />
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
