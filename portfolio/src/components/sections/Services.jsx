

function Services(){

    return(

        <> 
       <div id="services" className="min-h-screen flex flex-col p-10 bg-blue-100 font-roboto scroll-mt-10 ">


         <h1 className="text-7xl font-bold mt-5 font-roboto ">Services</h1>        
        <div className="grid grid-cols-3 gap-5 bg-blue-100 ">

            <div className="mt-5 hover:-translate-y-2 transform transition-transform duration-300">
            <span className="text-4xl font-roboto text-blue-600"> #1 </span>
            <p className="font-roboto mt-3 text-xxl mb-4 font-bold">Maintenance & Support</p>
            <p className="font-roboto"> At Minibytes, web designing is more than just aesthetics — it’s about creating a powerful first impression. We blend creativity with functionality to design modern, responsive, and user-centric interfaces. From wireframing and prototyping to final UI layouts, we focus on delivering experiences that are not only visually appealing but also easy to navigate. Our designs are rooted in user psychology, ensuring that every color, font, and layout element aligns with your brand identity and goals. Whether it’s a startup landing page or a full-scale enterprise website, our design process is customized to meet your needs and create lasting impressions.</p>
            </div>

            <div className="mt-5 hover:-translate-y-2 transform transition-transform duration-300" >
            <span className="text-4xl text-blue-600 font-roboto "> #2 </span>
            <p className="font-roboto mt-3 text-xxl mb-4 font-bold">Web Design</p>

            <p className="font-roboto">Minibytes offers robust and scalable web development solutions tailored for performance and efficiency. We specialize in both front-end and back-end development, using modern technologies like React, Tailwind CSS, Node.js, and MongoDB to bring your vision to life. Our development approach ensures that your website is not only fast and responsive but also secure, SEO-optimized, and fully functional across all platforms. Whether it's creating an eCommerce platform, a portfolio site, or a web application, we write clean, modular code that is easy to maintain and scale. We also follow best practices in version control, deployment, and integration with third-party services to ensure a smooth development pipeline.</p>
                

            </div>

            <div className="mt-5 hover:-translate-y-2 transform transition-transform duration-300">
            <span className="text-4xl font-roboto text-blue-600 "> #3 </span>
            <p className="mt-3 font-roboto text-xxl  mb-4 font-bold">Maintenance & Support</p>
            <p className="font-roboto ">Launching a website is just the beginning. At Minibytes, we provide ongoing maintenance and support services to ensure your website remains up-to-date, secure, and fully functional over time. This includes regular updates, security patches, performance monitoring, bug fixes, content updates, and more. We proactively monitor your site to avoid potential issues before they impact your users. Whether it’s fixing a broken link, adding a new feature, or optimizing for speed, our support team is here to help you keep your digital presence strong and worry-free, so you can focus on growing your business.</p>
            


            </div>


        </div>
        </div>
        
        </>
    )
}

export default Services;