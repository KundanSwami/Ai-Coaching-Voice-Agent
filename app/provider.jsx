"use client"
import React, { Suspense } from 'react'
import { ConvexProvider, ConvexReactClient } from "convex/react";
import AuthProvider from './AuthProvider';
export default function Provider({children}) {
 const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

  return (
    <Suspense fallback ={<p>loading...</p>}>
         <ConvexProvider client={convex}>
            <AuthProvider>
               {children}
            </AuthProvider>
         
          </ConvexProvider>
          
    </Suspense>
  );
}


