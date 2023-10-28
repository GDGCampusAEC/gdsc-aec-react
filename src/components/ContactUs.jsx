import contactus from "../assets/contactus.png";
export default function ContactUs() {
  return (
    <div>
      <div className="flex flex-col p-10 justify-evenly md:flex-row">
        <img src={contactus} className="max-w-full" alt="Contact Us" />

        <div className="md:pl-10">
          <h1 className="text-black text-[4.875rem] font-semibold">
            Get in Touch
          </h1>
          <h2 className="text-[#686868] text-[1.4375rem] font-semibold leading-normal font-inter">
            If you have any questions or inquiries, feel free to ask us.
          </h2>
          <form className="flex flex-col">
            <input
              className="p-2 m-2 border-2 border-black rounded-lg md:w-1/3 lg:w-full"
              type="text"
              name="firstname"
              placeholder="Your name.."
            />
            <input
              className="p-2 m-2 border-2 border-black rounded-lg md:w-1/3 lg:w-full"
              type="text"
              name="email"
              placeholder="Email"
            />
            <textarea
              className="h-40 p-2 m-2 border-2 border-black rounded-lg md:w-1/3 lg:w-full"
              name="Message"
              placeholder="Message"
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
}
