import React from "react";

const Contact = () => {

  return (
    <div className="bg-customBlue ">
      <div className="flex flex-col items-center justify-center gap-4 py-32 mx-[10vw] md:mx-[15vw] xl:mx-[30vw]">
        <div className="flex gap-3 text-customGreen text-sm md:text-lg">
          <span>04.</span>
          <p>What’s Next?</p>
        </div>
        <div className="text-customLight text-xl font-bold md:text-3xl">
          <p>Get In Touch</p>
        </div>
        <div className="text-justify text-customSlate text-sm md:text-base">
          <p>
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
        </div>
        <div className="mt-12">
          {/* osthir button start*/}
          <div className=" transition-transform transform translate-y-0 translate-x-0 bg-customGreen rounded">
            <a href="mailto:raselbishwas997@gmail.com">
              <button className="font-mono px-4 py-2 md:px-6 md:py-4 text-customGreen bg-customBlue outline outline-1 rounded transform hover:-translate-y-1 hover:-translate-x-1">
                Say Hello
              </button>
            </a>
          </div>
          {/* osthir button end*/}
        </div>
      </div>
    </div>
  );
};

export default Contact;
