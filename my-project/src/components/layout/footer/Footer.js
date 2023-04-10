import React from 'react';
import minhalogo from "./logoneo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-custom_cor-verde-5 p-1 text-center mt-auto ">
        <p>© {new Date().getFullYear()} Copyright. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;