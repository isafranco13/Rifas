import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#F1F1F1] text-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Section */}
          <div className="mb-9 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Contáctanos</h2><br />
            <div className="flex space-x-7 text-center place-items-center ">
              <Link href="https://www.instagram.com" className="hover:text-gray-400">
                <div className="bg-[#007bff] rounded-full h-20 w-20 ">
                  <Image src="/whatsapp.png" alt="whatsapp"
                height={60} width={60}  className=""></Image>
                </div>
                
              </Link>
              <Link href="https://www.facebook.com" className="hover:text-gray-400">
                <div className="bg-[#007bff] rounded-full">
                   <Image src="/facebook.png" alt="Facebook"
                height={40} width={40} ></Image>
                </div>
               
              </Link>
              <Link href="https://www.instagram.com" className="hover:text-gray-400">
                <div className="bg-[#007bff] rounded-full">
                  <Image src="/Instagram.png" alt="Instagram"
                height={40} width={40} ></Image>
                </div>
                
              </Link>
              
            </div>
          </div>
          {/* Copyright Section */}
          <div className="text-center md:text-right">
            <p>
              &copy; {new Date().getFullYear()} J&I
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;