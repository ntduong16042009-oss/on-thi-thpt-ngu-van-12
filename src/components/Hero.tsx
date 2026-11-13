import React from 'react';
import { HeroSection, HeroSectionProps } from './HeroSection';

export const Hero: React.FC<HeroSectionProps> = (props) => {
  return <HeroSection {...props} />;
};
