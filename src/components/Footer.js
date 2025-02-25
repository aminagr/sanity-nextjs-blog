import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
      <div className="flex justify-center mb-4">
        <a href="#" className="mx-4">
          <FaFacebook size={30} className="hover:text-primary transition-all duration-300" />
        </a>
        <a href="#" className="mx-4">
          <FaInstagram size={30} className="hover:text-primary transition-all duration-300" />
        </a>
        <a href="#" className="mx-4">
          <FaYoutube size={30} className="hover:text-primary transition-all duration-300" />
        </a>
      </div>
      <p>&copy; 2025 Amina Grine. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
