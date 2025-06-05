import React from 'react';
import background from '/Users/aaryagandhi/Desktop/MiniByte_Portfolio/portfolio/src/assets/image1.jpg';

function Home() {

    const scroll=()=>{
        const aboutsection=document.getElementById('aboutus');
        if(aboutsection)
        {
            aboutsection.scrollIntoView({behavior:'smooth'});
        }

    }

  return (
    <>

    <div id="home" className='min-h-screen w-full flex md:grid-cols-2'>

        <div className=' grid grid-cols-2 gap-4 items-center '>

        <div className='h-full w-full overflow-hidden'>
          <img src={background} alt="miniyte" 
          className=" w-full h-full object-cover md:aspect-auro rounded-lg shadow-lg" />
        </div>

        <div>
            <p className='text-sm tracking-widest text-gray-900 mb-2 '>Welcome to my website</p>
          <h1 className="text-4xl font-bold text-gray-800">Heloo, Welcome to Minibytes</h1>
          <p className="mt-4 text-lg text-gray-600">
            We craft beautiful web experiences with modern design and performance in mind.
          </p>

          <button onClick={scroll} className='mt-10 border-2 px-2 py-2 border-gray-800  rounded-full hover:text-white transition duration-400 '>Lets get Started</button>
        </div>

        </div>
        

    </div>

        </>


  );
}

export default Home;
