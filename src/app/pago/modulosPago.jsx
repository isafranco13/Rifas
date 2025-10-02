"use client";
import React, {useState} from 'react';
import styles from './modulosPago.module.css';
import Image from 'next/image';

export default function BoletosBonos(){
    const [seccionAbierta, setSeccionAbierta] = useState(null);
    const toggleSeccion = (nombre) => {
        setSeccionAbierta(seccionAbierta === nombre ? null : nombre);
    };

    return(
        <div className={styles.contenedorAcordeon}>
      {/* SECCIÓN 1: TRANSFERENCIAS Y CAJERO */}
      <div 
        className={`${styles.tarjetaExp} ${seccionAbierta === 'boletos' ? styles.abierta : ''}`}
        onClick={() => toggleSeccion('boletos')}
      >
        <h2 className={styles.tituloExp}>TRANSFERENCIAS Y CAJERO <span className={styles.icono}>{seccionAbierta === 'boletos' ? '▲' : '▼'}</span></h2>
        
        {seccionAbierta === 'boletos' && (
          <div className={styles.contenidoExp}>
            {/* <h3>TRANSFERENCIAS Y CAJERO</h3> */}
            <ul>
              <li><Image src="/banco.png" alt="banco"
                height={45} width={45}></Image>
                Nombre de la cuenta <br />5555 5555 5555 5555 55</li>
              <li><Image src="/banco.png" alt="banco"
                height={45} width={45}></Image>
                Nombre de la cuenta <br />5555 5555 5555 5555 55</li>
              <li><Image src="/banco.png" alt="banco"
                height={45} width={45}></Image>
                Nombre de la cuenta <br />5555 5555 5555 5555 55</li>
            </ul>
          </div>
        )}
      </div>

      {/* SECCIÓN 2: PAGO EN ESTABLECIMIENTOS */}
      <div 
        className={`${styles.tarjetaExp} ${seccionAbierta === 'bonos' ? styles.abierta : ''}`}
        onClick={() => toggleSeccion('bonos')}
      >
        <h2 className={styles.tituloExp}>PAGO EN OXXO, 7ELEVEN, FARMACIAS <span className={styles.icono}>{seccionAbierta === 'bonos' ? '▲' : '▼'}</span></h2>
        
        {seccionAbierta === 'bonos' && (
          <div className={styles.contenidoExp}>
            <ul>
              <li><Image src="/farmacia.png" alt="banco"
                height={45} width={45}></Image>
                Nombre de la cuenta <br />5555 5555 5555 5555 55</li>
                <li><Image src="/farmacia.png" alt="banco"
                height={45} width={45}></Image>
                Nombre de la cuenta <br />5555 5555 5555 5555 55</li>
                <li><Image src="/farmacia.png" alt="banco"
                height={45} width={45}></Image>
                Nombre de la cuenta <br />5555 5555 5555 5555 55</li>
              {/* ... más información ... */}
            </ul>
          </div>
        )}
      </div>
    </div>
    );
}