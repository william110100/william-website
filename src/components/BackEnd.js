import React from 'react';
import Spring from 'assets/images/spring-logo.png';
import Node from 'assets/images/node-js-logo.png';
import Express from 'assets/images/express-js-logo.png';
import MongoDB from 'assets/images/mongodb-logo.png';
import Oracle from 'assets/images/oracle-logo.png';
import Cassandra from 'assets/images/cassandra-logo.png';

const BackEnd = () => {
  return (
    <div className='flex flex-wrap items-center pt-8'>
      <div className='w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48'>
        <div className='text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'>
          <i className='fas fa-cogs text-xl'></i>
        </div>
        <h3 className='text-3xl mb-2 font-semibold leading-normal'>Back End Tech Stack</h3>
        <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700'>
          With the help of Back-End technologies, developers is the ones who make sure the data and
          systems requested by the Front-End application or software are efficiently delivered.
          Back-End developers handle everything that happens in the background.
        </p>
        <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700'>
          The prime goal of Back-End development is to ensure that end-users get the data or services
          they requested without a glitch and on time.
        </p>
        <div className='block pb-6'>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Programming Language
          </span>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Designing
          </span>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Database
          </span>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Debugging
          </span>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Maintainable
          </span>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Testing
          </span>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Improving
          </span>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Delivering
          </span>
        </div>
      </div>

      <div className='w-full md:w-6/12 px-4 mr-auto ml-auto mt-32'>
        <div className='justify-center flex flex-wrap relative'>
          <div className='my-4 w-full lg:w-6/12 px-4 lg:mt-16'>
            <a href='https://spring.io/' target='_blank' rel='noreferrer noopener'>
              <div className='bg-lime-500 shadow-lg rounded-lg text-center p-8'>
                <img className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                  src={Spring} alt='...' />
                <p className='text-lg text-white mt-4 font-semibold'>Spring</p>
              </div>
            </a>
            <a href='https://nodejs.org/en/' target='_blank' rel='noreferrer noopener'>
              <div className='bg-green-600 shadow-lg rounded-lg text-center p-8 mt-8'>
                <img className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                  src={Node} alt='...' />
                <p className='text-lg text-white mt-4 font-semibold'>Node</p>
              </div>
            </a>
            <a href='https://expressjs.com/' target='_blank' rel='noreferrer noopener'>
              <div className='bg-black shadow-lg rounded-lg text-center p-8 mt-8'>
                <img className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                  src={Express} alt='...' />
                <p className='text-lg text-white mt-4 font-semibold'>Express</p>
              </div>
            </a>
          </div>
          <div className='my-4 w-full lg:w-6/12 px-4'>
            <a href='https://www.mongodb.com/' target='_blank' rel='noreferrer noopener'>
              <div className='bg-green-600 shadow-lg rounded-lg text-center p-8'>
                <img className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                  src={MongoDB} alt='...' />
                <p className='text-lg text-white mt-4 font-semibold'>MongoDB</p>
              </div>
            </a>
            <a href='https://www.oracle.com/database/' target='_blank' rel='noreferrer noopener'>
              <div className='bg-red-600 shadow-lg rounded-lg text-center p-8 mt-8'>
                <img className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                  src={Oracle} alt='...' />
                <p className='text-lg text-white mt-4 font-semibold'>Oracle</p>
              </div>
            </a>
            <a href='https://cassandra.apache.org/' target='_blank' rel='noreferrer noopener'>
              <div className='bg-blue-500 shadow-lg rounded-lg text-center p-8 mt-8'>
                <img className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                  src={Cassandra} alt='...' />
                <p className='text-lg text-white mt-4 font-semibold'>Cassandra</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackEnd;
