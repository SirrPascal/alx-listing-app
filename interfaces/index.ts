import React from 'react';

export interface CardProps {
    id: string | number;
    title: string;
    description: string;
    imageUrl?: string;
    href?: string;
    children: React.ReactNode;
    priceText: string; 
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost'; 
}