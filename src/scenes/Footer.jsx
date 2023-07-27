import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            Thank you for visiting my profile website! Please check out my resume and contact me.
          </p>
          <button
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
            onClick={() => window.open('./assets/ShuxinWeng-Resume.pdf')}
          >
            Download CV
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;