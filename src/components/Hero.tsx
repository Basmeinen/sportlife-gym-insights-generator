
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-duxblue-dark to-duxblue py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Data Analyse Opdracht<br />
            <span className="text-secondary">SportLife Gym</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Ontwikkel inzichten uit beschikbare data voor het management van SportLife Gym
            en visualiseer belangrijke KPI's voor de uitbreiding van het marktaandeel.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/dashboard">
              <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 rounded-md text-lg">
                Begin met de opdracht
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="#assignment">
              <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20 px-8 py-6 rounded-md text-lg">
                Lees meer
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
