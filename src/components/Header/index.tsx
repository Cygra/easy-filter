import React, { FC } from 'react';
import './Header.scss'

export const Header: FC = () => {
  return (
    <div className='header'>
      <h1>Try Filter</h1>&nbsp;
      <a href='https://github.com/Cygra/easy-filter' target='_blank'>on Github</a>
    </div>
  )
}
