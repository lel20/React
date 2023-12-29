"use client"
import Signin from '@/components/signin'
import { signIn } from 'next-auth/react';


export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Signin />
      
    </div>

  );
}
