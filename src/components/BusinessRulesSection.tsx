
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const BusinessRulesSection = () => {
  const kpis = [
    { name: "Club_name", description: "Name of the club" },
    { name: "Joiners", description: "# joiners" },
    { name: "JoinersInDebt", description: "# joiners with debt" },
    { name: "Rejoiners", description: "# of members rejoining" },
    { name: "Leavers", description: "# of contracts ending" },
    { name: "1MonthLeavers", description: "# contracts ending next month" },
    { name: "MembersInDebt", description: "# members with any debt" },
    { name: "FrozenMembers", description: "# frozen members" },
    { name: "DebtResolved", description: "# of members that resolved their debt" },
    { name: "TotalMembersStartMonth", description: "# members at start of month" },
    { name: "NetGain", description: "Net gain in total members" },
    { name: "Churn", description: "% of churn" },
    { name: "TotalMembers", description: "Total members" }
  ];

  const businessRules = [
    "Een lid is een joiner wanneer deze in de desbetreffende maand is gestart.",
    "Een lid is een rejoiner wanneer het laatst bekende contract niet langer dan 6 maanden geleden is.",
    "Een lid is een leaver wanneer het contract in die maand afloopt.",
    "Een lid is een 1MonthLeaver wanneer het contract de opvolgende maand afloopt.",
    "Wanneer een lid langer dan 2 maanden een schuld open heeft staan, wordt het lidmaatschap bevroren tot het lid de volledige schuld heeft afbetaald.",
    "Wanneer een schuld is afbetaald, is het lidmaatschap direct weer actief."
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">KPI's & Bedrijfsregels</h2>
          <p className="text-lg text-gray-600">
            Overzicht van de te analyseren KPI's en de originele bedrijfsregels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Originele rapportage velden</h3>
            <Card className="card-shadow">
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Veld</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Beschijving</th>
                      </tr>
                    </thead>
                    <tbody>
                      {kpis.map((kpi, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="py-3 px-4 text-sm text-gray-900 font-medium">{kpi.name}</td>
                          <td className="py-3 px-4 text-sm text-gray-600">{kpi.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Verkregen bedrijfsregels</h3>
            <Card className="card-shadow">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {businessRules.map((rule, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-duxblue text-white text-sm font-medium mr-3 flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessRulesSection;
