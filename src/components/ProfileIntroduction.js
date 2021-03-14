import React from 'react';
import ProfileImage from 'assets/images/profile.png';

const ProfileIntroduction = () => {
  return (
    <section className='header relative pt-16 items-center flex h-screen max-h-860-px'>
      <div className='container mx-auto items-center flex flex-wrap'>
        <div className='w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4'>
          <div className='pt-32 sm:pt-0'>
            <h2 className='font-semibold text-4xl text-gray-700'>Hi Guys! Meet me William</h2>
            <p className='mt-4 text-lg leading-relaxed text-gray-600'>
              A Tech Engineer with track records of of redesigning, inventing and leading application development 
              both front-end and back-end side. The top priorities of development are user's perspective and optimization code.
              I focus on delivering the best quality of code during the development phase of an application.
              It brings me joy to take part in a team to deliver the best product that is widely used by other people
              to help them make their life easier through the application.
            </p>
          </div>
        </div>
      </div>

      <img className='absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px'
        src={ProfileImage} alt='...' />
    </section>
  );
}

export default ProfileIntroduction;
