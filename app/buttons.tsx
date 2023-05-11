'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Buttons() {
    const router = useRouter();

    return (
        <div className='flex flex-row items-center gap-3'>
          <button onClick={(e) => {
            router.push('./plugins')
          }}>
            <p className='font-mono text-black underline'>plugins</p>
            </button>
          <button onClick={(e) => {
            router.push('./create');
          }} className='rounded-md bg-black p-2'>
            <p className='font-mono text-white '>create a plugin</p>
            </button>
        </div>
    )
}