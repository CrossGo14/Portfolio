import Navbar from "../common/Navbar"



function AboutUs(){


    return(

        <>
       <div id="aboutus" className=" min-h-screen flex flex-col p-10 bg-blue-100 font-roboto scroll-mt-10 ">

    
        <p className="text-3xl font-bold text-7xl">About Us</p>
        <p className="mt-4  py-5 text-xl ">Welcome to Minibytes — a digital space where creativity meets code. We are not just another web development team; we are passionate creators, designers, and problem-solvers committed to building intuitive, modern, and high-performance web experiences.Founded with the idea that every byte matters, Minibytes was born out of a desire to bring elegant solutions to complex digital problems. In a world driven by innovation, we focus on delivering work that not only looks great but also works flawlessly — fast, responsive, and scalable.</p>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md ">
            <h3 className="text-xl font-semibold text-primary mb-2">Innovation</h3>
            <p className="text-blue-600">
              We push boundaries to create cutting-edge solutions tailored to your needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary mb-2">Collaboration</h3>
            <p className="text-blue-600">
              We work closely with clients to turn ideas into reality.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary mb-2">Excellence</h3>
            <p className="text-blue-600">
              Quality is at the heart of everything we do.
            </p>
          </div>
        </div>
       
        </div>

        </>
    )
}

export default AboutUs