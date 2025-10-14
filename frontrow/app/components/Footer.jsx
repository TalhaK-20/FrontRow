"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-black text-[#d4ff00] mb-4">SFB</h3>
            <p className="text-gray-400 text-sm mb-6">Marketing Limited</p>
            <div className="space-y-3 text-gray-400 text-sm">
              <p className="leading-relaxed">
                Office 5, 131 Cranbrook Road
                <br />
                Ilford, England
                <br />
                IG1 4SY
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">SERVICES</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-[#d4ff00] cursor-pointer transition-colors">
                Retail Media
              </li>
              <li className="hover:text-[#d4ff00] cursor-pointer transition-colors">
                Amazon Growth
              </li>
              <li className="hover:text-[#d4ff00] cursor-pointer transition-colors">
                Brand Strategy
              </li>
              <li className="hover:text-[#d4ff00] cursor-pointer transition-colors">
                D2C Marketing
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">COMPANY</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-[#d4ff00] cursor-pointer transition-colors">
                About Us
              </li>
              <li className="hover:text-[#d4ff00] cursor-pointer transition-colors">
                Our Work
              </li>
              <li className="hover:text-[#d4ff00] cursor-pointer transition-colors">
                Careers
              </li>
              <li className="hover:text-[#d4ff00] cursor-pointer transition-colors">
                Contact
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">CONTACT</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a
                  href="tel:+447988074798"
                  className="hover:text-[#d4ff00] transition-colors block"
                >
                  +44 7988 074798
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@sfbmarketing.com"
                  className="hover:text-[#d4ff00] transition-colors block"
                >
                  info@sfbmarketing.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-bold mb-3">CONNECT</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-[#d4ff00] cursor-pointer transition-colors">
                  LinkedIn
                </li>
                <li className="hover:text-[#d4ff00] cursor-pointer transition-colors">
                  Twitter
                </li>
                <li className="hover:text-[#d4ff00] cursor-pointer transition-colors">
                  Instagram
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 SFB Marketing Limited. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-[#d4ff00] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#d4ff00] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#d4ff00] transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}