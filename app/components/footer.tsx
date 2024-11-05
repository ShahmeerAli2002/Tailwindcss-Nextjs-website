import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* About Section */}
          <div className="text-center sm:text-left">
            <div className="mb-6">
              <Link href="/" className="inline-flex sm:flex items-center justify-center sm:justify-start space-x-2">
                <img src="/image/logo.png" alt="Geco" className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12" />
                <span className="text-lg xs:text-xl sm:text-2xl font-bold">Geco</span>
              </Link>
            </div>
            <p className="text-gray-400 mb-6 text-xs xs:text-sm sm:text-base px-4 sm:px-0">
              Geco Gaming is your ultimate destination for online gaming entertainment,
              tournaments, and community engagement.
            </p>
            <div className="flex justify-center sm:justify-start space-x-3 xs:space-x-4">
              <Link href="#" className="hover:text-yellow-500 transition-colors">
                <Facebook className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
              </Link>
              <Link href="#" className="hover:text-yellow-500 transition-colors">
                <Twitter className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
              </Link>
              <Link href="#" className="hover:text-yellow-500 transition-colors">
                <Instagram className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
              </Link>
              <Link href="#" className="hover:text-yellow-500 transition-colors">
                <Youtube className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
              </Link>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold mb-3 xs:mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 xs:space-y-3 sm:space-y-4">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-yellow-500 transition-colors text-xs xs:text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/tournaments" className="text-gray-400 hover:text-yellow-500 transition-colors text-xs xs:text-sm sm:text-base">
                  Tournaments
                </Link>
              </li>
              <li>
                <Link href="/streams" className="text-gray-400 hover:text-yellow-500 transition-colors text-xs xs:text-sm sm:text-base">
                  Live Streams
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-yellow-500 transition-colors text-xs xs:text-sm sm:text-base">
                  Game Shop
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-yellow-500 transition-colors text-xs xs:text-sm sm:text-base">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Game Categories */}
          <div className="text-center sm:text-left">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold mb-3 xs:mb-4 sm:mb-6">Game Categories</h3>
            <ul className="space-y-2 xs:space-y-3 sm:space-y-4">
              <li>
                <Link href="/games/action" className="text-gray-400 hover:text-yellow-500 transition-colors text-xs xs:text-sm sm:text-base">
                  Action Games
                </Link>
              </li>
              <li>
                <Link href="/games/racing" className="text-gray-400 hover:text-yellow-500 transition-colors text-xs xs:text-sm sm:text-base">
                  Racing Games
                </Link>
              </li>
              <li>
                <Link href="/games/strategy" className="text-gray-400 hover:text-yellow-500 transition-colors text-xs xs:text-sm sm:text-base">
                  Strategy Games
                </Link>
              </li>
              <li>
                <Link href="/games/sports" className="text-gray-400 hover:text-yellow-500 transition-colors text-xs xs:text-sm sm:text-base">
                  Sports Games
                </Link>
              </li>
              <li>
                <Link href="/games/adventure" className="text-gray-400 hover:text-yellow-500 transition-colors text-xs xs:text-sm sm:text-base">
                  Adventure Games
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold mb-3 xs:mb-4 sm:mb-6">Contact Info</h3>
            <ul className="space-y-2 xs:space-y-3 sm:space-y-4">
              <li className="flex items-center justify-center sm:justify-start space-x-2 xs:space-x-3">
                <MapPin className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-yellow-500" />
                <span className="text-gray-400 text-xs xs:text-sm sm:text-base">123 Gaming Street, Digital City</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-2 xs:space-x-3">
                <Phone className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-yellow-500" />
                <span className="text-gray-400 text-xs xs:text-sm sm:text-base">+1 234 567 890</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-2 xs:space-x-3">
                <Mail className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-yellow-500" />
                <span className="text-gray-400 text-xs xs:text-sm sm:text-base">contact@geco.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 xs:py-6 sm:py-8">
          <div className="flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:justify-between">
            <div className="text-center sm:text-left">
              <h4 className="text-sm xs:text-base sm:text-lg font-bold">Subscribe to Our Newsletter</h4>
              <p className="text-gray-400 text-xs xs:text-sm sm:text-base">Get the latest gaming news and updates!</p>
            </div>
            <div className="flex w-full sm:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#2a2a2a] text-white px-2 xs:px-3 sm:px-4 py-2 rounded-l outline-none w-full text-xs xs:text-sm sm:text-base"
              />
              <button className="bg-yellow-500 text-black px-3 xs:px-4 sm:px-6 py-2 rounded-r font-bold hover:bg-yellow-600 transition-colors text-xs xs:text-sm sm:text-base whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0f0f0f] py-3 xs:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center space-y-3 xs:space-y-4 sm:space-y-0 sm:flex-row sm:justify-between">
          <p className="text-gray-400 text-[10px] xs:text-xs sm:text-sm text-center sm:text-left">
            © 2024 Geco Gaming. All rights reserved. Made with 💛 by Shahmeer Ali
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 xs:gap-4 sm:gap-6">
            <Link href="/privacy" className="text-gray-400 text-[10px] xs:text-xs sm:text-sm hover:text-yellow-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 text-[10px] xs:text-xs sm:text-sm hover:text-yellow-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 text-[10px] xs:text-xs sm:text-sm hover:text-yellow-500 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;