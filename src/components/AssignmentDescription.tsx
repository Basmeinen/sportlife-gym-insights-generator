
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AssignmentDescription = () => {
  return (
    <section id="assignment" className="section bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Opdrachtomschrijving</h2>
          <p className="text-lg text-gray-600">
            Een uitgebreide analyse van de SportLife Gym data voor het inzichtelijk maken van key performance indicators.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <p className="text-lg mb-6">
            SportLife Gym is een organisatie met een sterke focus en ambitie m.b.t. het uitbreiden van hun marktaandeel. 
            Om deze groei onder andere te realiseren heeft de organisatie besloten een buitenlands keten te kopen, 
            die het buitenlandse marktaandeel vergroot.
          </p>
          <p className="text-lg mb-6">
            Het scenario is dat de dagelijkse gang van zaken in de keten worden voortgezet. 
            De BI logica moet geabsorbeerd worden in het data-/BI-landschap van [Bedrijf X].
          </p>
          <p className="text-lg mb-6">
            Om inzichtelijk te maken wat de prestaties zijn van de instanties van deze keten, 
            willen ze een data consultant inschakelen om ervoor te zorgen dat deze KPI's inzichtelijk 
            worden voor C-level management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="card-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Beschikbare bronnen</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Een beschrijving van de KPI's die de stakeholders inzichtelijk willen hebben.</li>
                <li>Toegang tot de database (beschikbare .csv-bestanden).</li>
                <li>De originele bedrijfsregels van de overgenomen keten.</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="card-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Vereisten</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Reverse engineer de benodigde data voor het inzichtelijk maken van de gewenste KPI's.</li>
                <li>Realiseer het dashboard voor het presenteren van de KPI's.</li>
                <li>Verifieer om de cijfers overeenkomen met de originele logica.</li>
                <li>De gecreëerde oplossing moet de resultaten per club én het totaal weergeven.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AssignmentDescription;
