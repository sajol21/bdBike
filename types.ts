import React from 'react';

export interface BikeModel {
  id: string;
  name: string;
  cc: string;
  price2023: string;
  price2024: string;
  price2025Est: string;
  mileage: string;
  image: string;
  tag: 'Commuter' | 'Sports' | 'Scooter';
  abs: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
  tags?: string[];
}