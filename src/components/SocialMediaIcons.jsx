const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/shuxin-weng-a5976a1bb/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src="assets/linkedin.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500 w-8"
          href="https://github.com/shuxinweng"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="twitter-link" src="assets/github.png" />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;