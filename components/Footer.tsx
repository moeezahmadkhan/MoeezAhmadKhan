import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 px-4 sm:px-6 lg:py-8 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-semibold mb-2">
              Moeez Ahmad Khan
            </h3>
            <p className="text-gray-400">
              MERN Stack Web Developer
            </p>
            <p className="text-gray-400">
              AWS Cloud Engineer
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              © 2025 Moeez Ahmad. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;