import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 z-20 w-full bg-[#F1F1F1] text-black md:px-8 py-5">
      <div className="w-full flex justify-between items-center md:px-8 py-1">
        {/* Left Section with 3 Links */}
        <section className="flex space-x-20">
         <Image src="/logoEjemplo.png" alt="Tu Logo"
          height={64} width={64}
          className="h-20 w-20"
          style={{ borderRadius: '50%', objectFit: 'cover' }}>
          </Image> 
          <Link href="/#inicio" >
            Inicio
          </Link>
          <Link href="/link2" >
            Preguntas Frecuentes
          </Link>
          <Link href="/link3" >
            Contacto
          </Link>
           <Link href="/link3">
            Métodos de Pago 
          </Link>
           <Link href="/link3" >
            Comprar Boletos
          </Link>
        </section>
      </div>
    </nav>
  );
}