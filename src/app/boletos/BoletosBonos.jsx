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
        <h2 className={styles.tituloExp}>Boletos <span className={styles.icono}>{seccionAbierta === 'boletos' ? '▲' : '▼'}</span></h2>
        
        {seccionAbierta === 'boletos' && (
          <div className={styles.contenidoExp}>
            <p><strong>Información de Boletos:</strong></p>
            <ul>
              <li>Precios por zona: VIP, General.</li>
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
        <h2 className={styles.tituloExp}>Bonos y Promociones <span className={styles.icono}>{seccionAbierta === 'bonos' ? '▲' : '▼'}</span></h2>
        
        {seccionAbierta === 'bonos' && (
          <div className={styles.contenidoExp}>
            <p><strong>Información de Bonos:</strong></p>
            <ul>
              <li>Beneficios del Bono Anual o de Temporada.</li>
              {/* ... más información ... */}
            </ul>
          </div>
        )}
      </div>
    </div>
    );
}