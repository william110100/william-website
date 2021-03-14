import React from 'react';
import Heroku from 'assets/images/heroku-logo.png';
import Jenkins from 'assets/images/jenkins-logo.png';
import GCP from 'assets/images/google-cloud-logo.png';
import Terraform from 'assets/images/terraform-logo.png';
import Bitbucket from 'assets/images/bitbucket-logo.png';
import Appium from 'assets/images/appium-logo.png';

const OtherTech = () => { 
  return (
    <div className='flex flex-wrap items-center pt-8'>
      <div className='w-full md:w-6/12 px-4 mr-auto ml-auto mt-32'>
        <div className='justify-center flex flex-wrap relative'>
          <div className='my-4 w-full lg:w-6/12 px-4'>
            <a href='https://www.heroku.com/' target='_blank' rel='noreferrer noopener'>
              <div className='bg-purple-800 shadow-lg rounded-lg text-center p-8 mt-8'>
                <img className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                  src={Heroku} alt='...' />
                <p className='text-lg text-white mt-4 font-semibold'>Heroku</p>
              </div>
            </a>
            <a href='https://www.jenkins.io/' target='_blank' rel='noreferrer noopener'>
              <div className='bg-red-600 shadow-lg rounded-lg text-center p-8 mt-8'>
                <img className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                  src={Jenkins} alt='...' />
                <p className='text-lg text-white mt-4 font-semibold'>Jenkins</p>
              </div>
            </a>
            <a href='https://cloud.google.com/' target='_blank' rel='noreferrer noopener'>
              <div className='bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 shadow-lg rounded-lg text-center p-8 mt-8'>
                <img className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                  src={GCP} alt='...' />
                <p className='text-lg text-white mt-4 font-semibold'>Google Cloud Platform</p>
              </div>
            </a>
          </div>
          <div className='my-4 w-full lg:w-6/12 px-4 lg:mt-16'>
            <a href='https://www.terraform.io/' target='_blank' rel='noreferrer noopener'>
              <div className='bg-violet-800 shadow-lg rounded-lg text-center p-8'>
                <img className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                  src={Terraform} alt='...' />
                <p className='text-lg text-white mt-4 font-semibold'>Terraform</p>
              </div>
            </a>
            <a href='https://bitbucket.org/product' target='_blank' rel='noreferrer noopener'>
              <div className='bg-blue-600 shadow-lg rounded-lg text-center p-8 mt-8'>
                <img className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                  src={Bitbucket} alt='...' />
                <p className='text-lg text-white mt-4 font-semibold'>Bitbucket</p>
              </div>
            </a>
            <a href='https://appium.io/' target='_blank' rel='noreferrer noopener'>
              <div className='bg-lightBlue-200 shadow-lg rounded-lg text-center p-8 mt-8'>
                <img className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                  src={Appium} alt='...' />
                <p className='text-lg text-white mt-4 font-semibold'>Appium</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className='w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48'>
        <div className='text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'>
          <i className='fas fa-desktop text-xl'></i>
        </div>
        <h3 className='text-3xl mb-2 font-semibold leading-normal'>Other Tech Stack</h3>
        <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700'>
          These technologies helps automate the parts of software development related to building, testing, and deploying, 
          facilitating continuous integration and continuous delivery.
        </p>
        <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700'>
          The prime goal these tools and technologies is to prepare an application before release to production.
        </p>
        <div className='block pb-6'>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Caching
          </span>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Automation
          </span>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Cloud
          </span>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Infrastructure
          </span>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Deploying
          </span>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Testing
          </span>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Repository
          </span>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Hosting
          </span>
        </div>
      </div>
    </div>
  );
}

export default OtherTech;
