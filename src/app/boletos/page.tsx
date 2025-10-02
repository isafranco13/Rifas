"use client";
import BoletosBonos from './BoletosBonos';
import Image from 'next/image';
import { useState } from 'react';

export default function boletos() {
  return (
    <main>
      <BoletosBonos/>
      <div className="flex items-center pl-50">
        <div className='flex items-center'><Image src="/casino.png" alt='azar'  height={80} width={80}></Image>
        <p className='pl-3 font-bold'>Boletos al azar</p></div>
        <div className='flex items-center pl-80'>
          <label htmlFor="ticket-search" className='font-medium text-gray-700'>

          </label>
          <input type="text" id='ticket-search' 
           placeholder='12345'className="p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
           pattern="[0-9]*"
          inputMode="numeric"/>
        </div>
      </div>
    </main>
  );
}