import React from "react";
import "./Footer.css";
import socialdata from "./Socialdata";

const thisyear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="bg-nblack text-white px-10 pb-5 ">
      <div className="flex flex-wrap md:justify-center gap-10 md:gap-28 md:flex-row">
      <div className="text-lg f_row-1">
        <h2 className="text-3xl mt-5 mb-6">Soloku</h2>
        <h3>Contact Us</h3>
        <h3>FAQ</h3>
        <h3>Support Us</h3>
        <h3>Find Us</h3>
      </div>
      <div className="text-xl font-medium f_row-2">
        <div className="mt-14">
          {socialdata.map((Socials) => (
            <div key={Socials.name} className="s_social_container">
              <img
                className="s_image"
                src={Socials.imageUrl}
                alt={Socials.name}
                />
              <h3 className="s_text">{Socials.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="sm:mt-14 mb-5 flex flex-col f_row-3">
        <h2>Stay up to date on the latest from Soloku</h2>
        <input
          className="email"
          type="email"
          placeholder="Enter your e-mail address"
          />
        <button className="bg-green text-black rounded font-semibold hover:bg-greeny hover:text-white f_button">Sign Up</button>
      </div>
      </div>
      <p className="text-center mt-5">&copy; {thisyear} Soloku, Inc.</p>
    </div>
  );
};

export default Footer;
