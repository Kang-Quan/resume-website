import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-gray-400 py-4 text-center">
      <p>© {new Date().getFullYear()} Kang Quan. Made with ❤️.</p>
    </footer>
  );
};

export default Footer;
