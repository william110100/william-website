import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IndexDropdown from './IndexDropdown';

const IndexNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className='top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link to='/' className='>text-gray-800 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase'>
              WM
            </Link>
            <button className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <i className='fas fa-bars'></i>
            </button>
          </div>
          <div className={'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' + (navbarOpen ? ' block' : ' hidden')}
            id='example-navbar-warning'>
            <ul className='flex flex-col lg:flex-row list-none mr-auto'>
              <li className='flex items-center'>
                <a className='hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='https://drive.google.com/file/d/1tunMtqhFjVUHnhx8yoCgG45-A-sjc99b/view?usp=sharing' target='_blank' rel='noreferrer noopener'>
                  <i className='text-gray-500 far fa-file-alt text-lg leading-lg mr-2' />{' '}
                  Resume
                </a>
              </li>
            </ul>
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <li className='flex items-center'>
                <IndexDropdown />
              </li>
              <li className='flex items-center'>
                <a className='hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='https://www.linkedin.com/in/william-mulia/' target='_blank' rel='noreferrer noopener'>
                  <i className='text-gray-500 fab fa-linkedin-in text-lg leading-lg' />
                  <span className='lg:hidden inline-block ml-2'>LinkedIn</span>
                </a>
              </li>
              <li className='flex items-center'>
                <a className='hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='https://discord.com/' target='_blank' rel='noreferrer noopener'>
                  <i className='text-gray-500 fab fa-discord text-lg leading-lg' />
                  <span className='lg:hidden inline-block ml-2'>Discord</span>
                </a>
              </li>
              <li className='flex items-center'>
                <a className='hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='https://wa.me/6289527526789' target='_blank' rel='noreferrer noopener'>
                  <i className='text-gray-500 fab fa-whatsapp text-lg leading-lg' />
                  <span className='lg:hidden inline-block ml-2'>WhatsApp</span>
                </a>
              </li>
              <li className='flex items-center'>
                <a className='hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='https://github.com/william110100' target='_blank' rel='noreferrer noopener'>
                  <i className='text-gray-500 fab fa-github text-lg leading-lg' />
                  <span className='lg:hidden inline-block ml-2'>GitHub</span>
                </a>
              </li>
              <li className='flex items-center'>
                <a className='hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='https://twitter.com/William70150026' target='_blank' rel='noreferrer noopener'>
                  <i className='text-gray-500 fab fa-twitter text-lg leading-lg ' />
                  <span className='lg:hidden inline-block ml-2'>Twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default IndexNavbar;
