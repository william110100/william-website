import React from 'react';

const FrontEnd = () => {
  return (
    <div className='flex flex-wrap items-center pt-8'>
      <div className='w-full md:w-6/12 px-4 mr-auto ml-auto mt-32'>
        <div className='justify-center flex flex-wrap relative'>
          <div className='my-4 w-full lg:w-6/12 px-4'>
            <a href='https://reactjs.org/' target='_blank' rel='noreferrer noopener'>
              <div className='bg-lightBlue-400 shadow-lg rounded-lg text-center p-8 mt-8'>
                <img className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                  src='https://raw.githubusercontent.com/william110100/public_assets/master/logos/react-logo.svg' alt='...' />
                <p className='text-lg text-white mt-4 font-semibold'>React</p>
              </div>
            </a>
            <a href='https://nextjs.org/' target='_blank' rel='noreferrer noopener'>
              <div className='bg-gray-900 shadow-lg rounded-lg text-center p-8 mt-8'>
                <img className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                  src='https://raw.githubusercontent.com/william110100/public_assets/master/logos/next-js-logo.svg' alt='...' />
                <p className='text-lg text-white mt-4 font-semibold'>Next</p>
              </div>
            </a>
            <a href='https://www.gatsbyjs.com/' target='_blank' rel='noreferrer noopener'>
              <div className='bg-violet-700 shadow-lg rounded-lg text-center p-8 mt-8'>
                <img className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                  src='https://raw.githubusercontent.com/william110100/public_assets/master/logos/gatsby-js-logo.svg' alt='...' />
                <p className='text-lg text-white mt-4 font-semibold'>Gatsby</p>
              </div>
            </a>
          </div>
          <div className='my-4 w-full lg:w-6/12 px-4 lg:mt-16'>
            <a href='https://flutter.dev/' target='_blank' rel='noreferrer noopener'>
              <div className='bg-blue-500 shadow-lg rounded-lg text-center p-8'>
                <img className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                  src='https://raw.githubusercontent.com/william110100/public_assets/master/logos/flutter-logo.svg' alt='...' />
                <p className='text-lg text-white mt-4 font-semibold'>Flutter</p>
              </div>
            </a>
            <a href='https://tailwindcss.com/' target='_blank' rel='noreferrer noopener'>
              <div className='bg-cyan-500 shadow-lg rounded-lg text-center p-8 mt-8'>
                <img className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                  src='https://raw.githubusercontent.com/william110100/public_assets/master/logos/tailwindcss-logo.svg' alt='...' />
                <p className='text-lg text-white mt-4 font-semibold'>Tailwind CSS</p>
              </div>
            </a>
            <a href='https://redux.js.org/' target='_blank' rel='noreferrer noopener'>
              <div className='bg-purple-600 shadow-lg rounded-lg text-center p-8 mt-8'>
                <img className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                  src='https://raw.githubusercontent.com/william110100/public_assets/master/logos/redux-logo.svg' alt='...' />
                <p className='text-lg text-white mt-4 font-semibold'>Redux</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className='w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48'>
        <div className='text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'>
          <i className='fas fa-desktop text-xl'></i>
        </div>
        <h3 className='text-3xl mb-2 font-semibold leading-normal'>Front End Tech Stack</h3>
        <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700'>
          With the help of Front-End technologies, developers create the design, structure, animation, and
          everything that you see on the screen while opening up a website, web application, or mobile app.
        </p>
        <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700'>
          The prime goal of Front-End development tools and technologies is to help mobile and web developers
          increase their efficiency and make the development process quicker, simpler, and better.
        </p>
        <div className='block pb-6'>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Web
          </span>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Mobile
          </span>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Framework
          </span>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'>
            iOS
          </span>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Android
          </span>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Design
          </span>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Responsive
          </span>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Cross Platform
          </span>
        </div>
      </div>
    </div>
  );
}

export default FrontEnd;
