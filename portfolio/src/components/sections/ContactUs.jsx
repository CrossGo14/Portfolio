// src/components/sections/ContactUs.jsx
function ContactUs() {
  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col p-10 bg-blue-400 font-roboto scroll-mt-10"
    >
      <h1 className="text-7xl text-white">Contact Us</h1>

      <div className="mt-13">
        <div className="text-white mb-">
          <p className="font-semibold text-4xl mb-5">Stay in touch</p>

          <a
            href="mailto:minibytes@gmail.com"
            className="text-3xl transition-all duration-300 hover:underline hover:-translate-y-1 text-white"
          >
            minibytes@gmail.com
          </a>
          <br />
          <a href="" className="pt text-3xl hover:underline">
            +91 7678012394
          </a>
        </div>
        <div>

          <div className="min-h-screen text-white flex items-center justify-center px-4">
            <form className="w-full">
              <h2 className="text-3xl font-bold mb-3">LEAVE A MESSAGE</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="flex flex-col">
                  <label className="font-bold text-sm mb-1">NAME</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="border-b-2 border-white focus:outline-none py-2 placeholder-gray-700"
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col">
                  <label className="font-bold text-sm mb-1">E-MAIL</label>
                  <input
                    type="email"
                    placeholder="@"
                    className=" border-b-2 border-white focus:outline-none py-2 placeholder-gray-700"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="mt-6">
                <label className="font-bold text-sm mb-1 block">MESSAGE</label>
                <textarea
                  placeholder="Your message"
                  className="w-full border-b-2 border-white focus:outline-none py-2 placeholder-gray-700"
                  rows="4"
                ></textarea>
              </div>

              {/* Send Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="px-6 py-2 border border-black font-bold hover:bg-white hover:text-black transition-all duration-200 rounded"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
