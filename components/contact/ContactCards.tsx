import React from "react";
import Image from "next/image";
import Email from "../../assets/img/10 (1).png";
import Phone from "../../assets/img/11.png";
import Location from "../../assets/img/12.png";

const ContactCards = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 lg:col-span-4 py-10">
        <div className="contact-card border-2 py-14 flex gap-4 flex-col items-center justify-center">
          <div className="icon">
            <Image src={Email} alt="Loading..." />
          </div>
          <div className="title my-1">
            <h1 className="text-2xl font-bold">Email Address</h1>
          </div>
          <div className="value">
            <a
              href="mailto:phoenix@gmail.com"
              className="text-gray-500 hover:text-red-500 cursor-pointer transition-all"
            >
              phoenix@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4 py-10">
        <div className="contact-card border-2 py-14 flex gap-4 flex-col items-center justify-center">
          <div className="icon">
            <Image src={Phone} alt="Loading..." />
          </div>
          <div className="title my-1">
            <h1 className="text-2xl font-bold">Phone Number</h1>
          </div>
          <div className="value">
            <a
              href="tel:0123456789"
              className="text-gray-500 hover:text-red-500 cursor-pointer transition-all"
            >
             0123456789
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4 py-10">
        <div className="contact-card border-2 py-14 flex gap-4 flex-col items-center justify-center">
          <div className="icon">
            <Image src={Location} alt="Loading..." />
          </div>
          <div className="title my-1">
            <h1 className="text-2xl font-bold">Office Address</h1>
          </div>
          <div className="value">
            <a
              href="#map"
              className="text-gray-500 hover:text-red-500 cursor-pointer transition-all"
            >
            Rourkela , India
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCards;
