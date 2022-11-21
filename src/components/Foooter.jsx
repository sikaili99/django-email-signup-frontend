import React from "react";

const Footer = () => {
  
  const year = () => {
    let d = new Date();
    return d.getFullYear();
  };

    return (
      <footer className="clearfix mt-4">
        <p>
          &copy; {year()}
          <a
            href="https://mathewsmusukuma.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Mateo
          </a>
          , The challenge
        </p>
      </footer>
    );
}
  
export default Footer;
