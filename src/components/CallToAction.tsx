
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="section bg-gradient-to-r from-duxblue to-secondary">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar om te beginnen met de opdracht?
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            Start direct met de analyse en het visualiseren van de KPI's voor SportLife Gym. 
            In de dashboard omgeving kun je ook een dataset genereren die steeds anders is maar wel voldoet aan de opdracht.
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="bg-white text-duxblue hover:bg-gray-100 px-8 py-6 rounded-md text-lg">
              Begin met de opdracht
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
