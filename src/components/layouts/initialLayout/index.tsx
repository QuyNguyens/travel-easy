'use client';
import { HeroUIProvider } from '@heroui/react';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/header';

const InitialLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeroUIProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex items-center flex-1">{children}</div>
        <Footer />
      </div>
    </HeroUIProvider>
  );
};

export default InitialLayout;
