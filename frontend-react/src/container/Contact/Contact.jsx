import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("movawjkq");
  return (
    <section
      className="xl:min-h-[90vh] border-t-[1px] border-[#ffffff2e] py-20"
      id="contact"
    >
      <div className="container mx-auto px-10 xl:px-32 h-full">
        <h2 className="text_2xl font-semibold text-white/80 w-full text-center mb-20">
          CONTACTS
        </h2>

        <div className="glass flex flex-col xl:flex-row p-0 sm:p-2 xl:p-4">
          <ul className=" flex-1 flex flex-col gap-5 justify-center items-start p-3 sm:p-5 xl:p-12">
            <li className="flex gap-3 sm:gap-8 xl:gap-10">
              <FaLinkedin className="w-10 xl:w-20 h-auto text-gray-300" />
              <div>
                <h3 className="font-bold text-lg text-gray-200">contact</h3>
                <p className="text-sm xl:text-lg text-gray-400">
                  mobile: ahmed.rashad25475@gmail.com
                </p>
                <p className="text-sm xl:text-lg  text-gray-400 mt-1">
                  email: +2010-953-533-64
                </p>
              </div>
            </li>
            <li className="flex gap-3 sm:gap-8 xl:gap-10">
              <FaGithub className="w-10 xl:w-20 h-auto text-gray-300" />
              <div>
                <h3 className="font-bold text-sm  xl:text-lg text-gray-200">
                  working hours
                </h3>
                <p className="text-sm xl:text-lg text-gray-400 mt-1">
                  sun-thu: 9am-5pm
                </p>
              </div>
            </li>
          </ul>
          <form
            className="flex-1 justify-center items-start p-3 sm:p-5 xl:p-12"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              className="mb-2 w-full rounded-md border border-gray-700 py-2 pl-2 pr-4 bg-[#0a0e17] text-white/70 outline-none"
            />
            <input
              autoComplete="off"
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-2 w-full rounded-md border border-gray-700 py-2 pl-2 pr-4 bg-[#0a0e17] text-white/70 outline-none"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              name="message"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md border border-gray-700 py-2 pl-2 pr-4 bg-[#0a0e17] text-white/70 outline-none"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.succeeded}
              className={`flex gap-3 justify-center items-center w-full py-3 rounded-md font-semibold text-xl bg-gradient-to-r from-[#0814a1] via-[#0a3e6c] to-[#430767]  text-white/80
              disabled:cursor-not-allowed
              ${state.succeeded ? "cursor-not-allowed" : "hover:scale-105 active:scale-95 duration-300"}
               `}
            >
              {state.succeeded
                ? "Your message has been sent successfully"
                : "Send Message"}
              {!state.succeeded && (
                <span>
                  <RiSendPlaneFill />
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
