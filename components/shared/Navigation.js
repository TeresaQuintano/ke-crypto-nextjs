import React from 'react';
import Link from 'next/link'
import { useRouter } from "next/router";
export const Navigation = () => {
  const router = useRouter();
  const navItems = [
    {
      id: 1,
      text: 'Dashboard',
      pathname:'/dashboard',
      icon:'dashboard',
    },
    {
      id: 2,
      text: 'Refresh',
      pathname:'/refresh',
      icon:'refresh',
    },
    {
      id: 3,
      text: 'Card',
      pathname:'/card',
      icon:'card',
    },
    {
      id: 4,
      text: 'Settings',
      pathname:'/settings',
      icon:'settings',
    },
  ]
  return (
      <nav>
        <ul className='c-navigation'>
          {navItems.map(item => (
              <li key={item.id} >
                <Link href={item.pathname}>
                  <a className={router.pathname === `${item.pathname}` ?
                      'c-navigation__link c-navigation__link--active'
                      :
                      'c-navigation__link'
                  }>
                  <i className={`c-navigation__icon k-icon-${item.icon}`} aria-hidden='true'></i>
                  <span className="u-sr-only">{item.text}</span>
                  </a>
                </Link>

              </li>
          ))}
        </ul>

      </nav>
  )
}

