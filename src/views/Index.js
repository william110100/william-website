import React from 'react';
import IndexNavbar from 'components/IndexNavbar';
import ProfileIntroduction from 'components/ProfileIntroduction';
import FrontEnd from 'components/FrontEnd';
import BackEnd from 'components/BackEnd';
import OtherTech from 'components/OtherTech';
import Footer from 'components/Footer';
import SoftSkills from 'assets/images/soft-skill.png';

const Index = () => {
  return (
    <>
      <IndexNavbar fixed />
      <ProfileIntroduction />

      <section className='mt-48 md:mt-40 pb-40 relative bg-gray-200'>
        <div className='-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20' style={{ transform: 'translateZ(0)' }}>
          <svg className='absolute bottom-0 overflow-hidden' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'
            version='1.1' viewBox='0 0 2560 100' x='0' y='0'>
            <polygon className='text-gray-200 fill-current' points='2560 0 2560 100 0 100'></polygon>
          </svg>
        </div>
        <div className='container mx-auto overflow-hidden pb-20 pt-8'>
          <div className='justify-center text-center flex flex-wrap mt-24'>
            <div className='w-full md:w-6/12 px-12 md:px-4'>
              <h2 className='font-semibold text-4xl'>Tech Skills</h2>
              <p className='text-lg leading-relaxed mt-4 mb-4 text-gray-600'>
                As a Tech Engineer, I have several ability for creating, designing, developing, maintaining, and
                testing to deliver the best product
              </p>
            </div>
          </div>
          <FrontEnd />
          <BackEnd />
          <OtherTech />
        </div>

        <div className='container mx-auto px-4 pb-32 pt-48'>
          <div className='items-center flex flex-wrap'>
            <div className='w-full md:w-5/12 ml-auto px-12 md:px-4'>
              <div className='md:pr-12'>
                <div className='text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'>
                  <i className='fas fa-brain text-xl'></i>
                </div>
                <h3 className='text-3xl font-semibold'>Soft Skills</h3>
                <p className='mt-4 text-lg leading-relaxed text-gray-600'>
                  These skills are also important for me to be more productive, innovative, creative, adaptable,
                  and confidence when worked as a team.
                </p>
                <ul className='list-none mt-6'>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <span className='text-gray-600 uppercase p-3 text-xs inline-flex items-center justify-center w-8 h-8 mr-4 shadow-lg rounded-full bg-gray-100'>
                        <i className='fas fa-puzzle-piece'></i>
                      </span>
                      <h4 className='text-gray-600'>Problem Solving</h4>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <span className='text-gray-600 uppercase p-3 text-xs inline-flex items-center justify-center w-8 h-8 mr-4 shadow-lg rounded-full bg-gray-100'>
                        <i className='fas fa-lightbulb'></i>
                      </span>
                      <h4 className='text-gray-600'>Critical Thinking</h4>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <span className='text-gray-600 uppercase p-3 text-xs inline-flex items-center justify-center w-8 h-8 mr-4 shadow-lg rounded-full bg-gray-100'>
                        <i className='fas fa-users'></i>
                      </span>
                      <h4 className='text-gray-600'>Teamwork</h4>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <span className='text-gray-600 uppercase p-3 text-xs inline-flex items-center justify-center w-8 h-8 mr-4 shadow-lg rounded-full bg-gray-100'>
                        <i className='fas fa-trophy'></i>
                      </span>
                      <h4 className='text-gray-600'>Competitive</h4>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <span className='text-gray-600 uppercase p-3 text-xs inline-flex items-center justify-center w-8 h-8 mr-4 shadow-lg rounded-full bg-gray-100'>
                        <i className='fas fa-handshake'></i>
                      </span>
                      <h4 className='text-gray-600'>Networking</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className='w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0'>
              <img className='max-w-full rounded-lg shadow-xl' src={SoftSkills} alt='...'
                style={{
                  transform: 'scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)',
                }} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Index;
