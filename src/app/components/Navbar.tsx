import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 z-50 w-full bg-F1F1F1 text-black md:px-8 py-4">
      <div className="w-full flex justify-between items-center md:px-8 py-2">
        {/* Left Section with 3 Links */}
        <section className="flex space-x-20">
          <Image src="/logoEjemplo.png" alt="Tu Logo"
          height={208} width={213}
          style={{ borderRadius: '50%', objectFit: 'cover' }}>
          </Image>
          <Link href="/link1" className="hover:underline">
            Inicio
          </Link>
          <Link href="/link2" className="hover:underline">
            Preguntas Frecuentes
          </Link>
          <Link href="/link3" className="hover:underline">
            Contacto
          </Link>
           <Link href="/link3" className="hover:underline">
            Métodos de Pago 
          </Link>
           <Link href="/link3" className="hover:underline">
            Comprar Boletos
          </Link>
        </section>

        {/* Middle Section with Icon */}
        

       
      </div>
    </nav>
  );
}