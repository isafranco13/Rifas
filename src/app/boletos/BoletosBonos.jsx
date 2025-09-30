"use client";
import React, {useState} from 'react';
import styles from './BoletosBonos.module.css';

export default function BoletosBonos(){
    const [seccionAbierta, setSeccionAbierta] = useState(null);
    const toggleSeccion = (nombre) => {
        setSeccionAbierta(seccionAbierta === nombre ? null : nombre);
    };

    return(
        <div className={styles.contenedorAcordeon}>
      {/* SECCIÓN 1: BOLETOS */}
      <div 
        className={`${styles.tarjetaExp} ${seccionAbierta === 'boletos' ? styles.abierta : ''}`}
        onClick={() => toggleSeccion('boletos')}
      >
        <h2 className={styles.tituloExp}>BOLETOS <span className={styles.icono}>{seccionAbierta === 'boletos' ? '▲' : '▼'}</span></h2>
        
        {seccionAbierta === 'boletos' && (
          <div className={styles.contenidoExp}>
            <ul>
              <li><strong>1</strong> BOLETO POR $$</li>
              <li><strong>10</strong> BOLETOS POR $$</li>
              <li><strong>20</strong> BOLETOS POR $$</li>
              <li><strong>50</strong> BOLETOS POR $$</li>
              <li><strong>100</strong> BOLETOS POR $$</li>
              <li><strong>200</strong> BOLETOS POR $$</li>
              <li><strong>300</strong> BOLETOS POR $$</li>
              <li><strong>500</strong> BOLETOS POR $$</li>
              {/* ... más información ... */}
            </ul>
          </div>
        )}
      </div>

      {/* SECCIÓN 2: BONOS */}
      <div 
        className={`${styles.tarjetaExp} ${seccionAbierta === 'bonos' ? styles.abierta : ''}`}
        onClick={() => toggleSeccion('bonos')}
      >
        <h2 className={styles.tituloExp}>BONOS <span className={styles.icono}>{seccionAbierta === 'bonos' ? '▲' : '▼'}</span></h2>
        
        {seccionAbierta === 'bonos' && (
          <div className={styles.contenidoExp}>
            <ul>
              <li>Bonos de boletos aqui</li>
              {/* ... más información ... */}
            </ul>
          </div>
        )}
      </div>
    </div>
    );
}