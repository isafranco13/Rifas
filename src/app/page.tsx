import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div id="inicio" className="flex justify-center items-center h-[800px] text-5xl">
        <div className="relative w-full h-[800px]"> 
      {/* La imagen ocupa todo el ancho y alto del contenedor */}
      <Image
        alt="Foto de premio"
        src="/ImagenEjemplo.png"
        layout="fill" // Permite a la imagen ocupar el tamaño del padre
        objectFit="cover" // Se asegura que la imagen cubra el contenedor sin distorsión
        className="w-full h-full"
      />
      {/* Contenedor del botón con posicionamiento absoluto para colocarlo encima */}
      <div className="absolute inset-0 flex justify-center items-center">
        <Link href="/boletos" className="bg-[#007bff] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300">
          Comprar Boletos
        </Link>
      </div>
    </div>    
      </div>
      <div className="p-4 md:p-8"> {/* Contenedor principal de la página con padding general */}
  {/* Sección para el título principal */}
  <div className="text-center mb-8">
    <h1 className="text-5xl font-bold">Rifas Ejemplo</h1>
  </div>

  {/* Contenedor del anuncio: con fondo, bordes redondeados y padding */}
  <div className="bg-[#007bff] rounded-lg p-6 shadow-md flex items-center">
    
    {/* Contenedor para la imagen, alineado a la izquierda */}
    <div className="flex-shrink-0 mr-8">
      <Image
        src="/ImagenEjemplo.png"
        alt="Imagen del Anuncio"
        width={500}
        height={500}
        className="rounded-lg object-cover"
      />
    </div>

    {/* Contenedor para el texto de información, a la derecha */}
    <div className="flex-grow">
      <h2 className="text-2xl font-semibold mb-2">¡Gran Anuncio!</h2>
      <p className="text-gray-700">
        Participa en nuestra próxima rifa para tener la oportunidad de ganar un premio increíble.
        ¡No te lo pierdas!
      </p><br />
      <Link href="/boletos" className="bg-[#F1F1F1] text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-white-100 transition-colors duration-300">
          Comprar Boletos
        </Link>
    </div>
  </div>
</div>
      <div className="flex justify-center items-center h-[800px] text-5xl">
        Preguntas Frecuentes
      </div>
    </>

  );
}
