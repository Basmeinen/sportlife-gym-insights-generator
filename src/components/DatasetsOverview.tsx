
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const DatasetsOverview = () => {
  const datasets = [
    {
      id: "members-details",
      name: "MembersDetails",
      description: "Dataset met alle huidige informatie m.b.t. leden.",
      columns: [
        { name: "Member_id", description: "Identificatienummer van het lid." },
        { name: "First_name", description: "Voornaam van het lid." },
        { name: "Last_name", description: "Achternaam van het lid." },
        { name: "Adress1", description: "Eerste adres van het lid." },
        { name: "City1", description: "Stad m.b.t. adres 1" },
        { name: "Adress2", description: "Tweede adres van het lid." },
        { name: "City2", description: "Stad m.b.t. adres 2" },
        { name: "Home_club_id", description: "Identificatienummer van de club" },
        { name: "Join_date", description: "Datum van de start van het eerste contract." }
      ]
    },
    {
      id: "members-subscriptions",
      name: "MembersSubscriptions",
      description: "Dataset met alle contracten.",
      columns: [
        { name: "Member_id", description: "" },
        { name: "Subscription_type", description: "" },
        { name: "Billing_type", description: "Manier van in rekening brengen van de abonnementskosten." },
        { name: "Billing_price", description: "Prijs die in rekening wordt gebracht." },
        { name: "JoinDate", description: "Datum van de start van het eerste contract." },
        { name: "RenewalDate", description: "Datum waarop het contract wordt verlengd." },
        { name: "BillingDate", description: "Datum van de eerstvolgende betaling." },
        { name: "ObligationDate", description: "Datum waarop een betaling verschuldigd is." },
        { name: "TerminationDate", description: "Datum waarop het contract eindigt." },
        { name: "TerminationReason", description: "Reden voor het beëindigen van het contract." }
      ]
    },
    {
      id: "clubs",
      name: "Clubs",
      description: "Dataset met club informatie.",
      columns: [
        { name: "Club_id", description: "" },
        { name: "Club_name", description: "" },
        { name: "Club_adress", description: "" }
      ]
    },
    {
      id: "members-subscriptions-details",
      name: "MembersSubscriptionsDetails",
      description: "Dataset met alle actieve contracten.",
      columns: [
        { name: "Member_id", description: "" },
        { name: "Subscription_type", description: "" },
        { name: "Billing_type", description: "Manier van in rekening brengen van de abonnementskosten." },
        { name: "Billing_price", description: "Prijs die in rekening wordt gebracht." },
        { name: "JoinDate", description: "Datum van de start van het eerste contract." },
        { name: "RenewalDate", description: "Datum waarop het contract wordt verlengd." },
        { name: "BillingDate", description: "Datum van de eerstvolgende betaling." },
        { name: "ObligationDate", description: "Datum waarop een betaling verschuldigd is." },
        { name: "TerminationDate", description: "Datum waarop het contract eindigt." },
        { name: "TerminationReason", description: "Reden voor het beëindigen van het contract." }
      ]
    },
    {
      id: "frozen-members",
      name: "FrozenMembers",
      description: "Dataset met alle bevroren members",
      columns: [
        { name: "Member_id", description: "" },
        { name: "Freeze_start", description: "UNIX Timestamp" },
        { name: "Freeze_end", description: "UNIX Timestamp" }
      ]
    },
    {
      id: "debt-members",
      name: "DebtMembers",
      description: "Dataset met alle leden die enige schuld open hebben staan",
      columns: [
        { name: "Club_id", description: "" },
        { name: "Member_id", description: "" },
        { name: "Debt", description: "Outstanding debt in [currency]" }
      ]
    },
    {
      id: "member-payments",
      name: "MemberPayments",
      description: "Alle betalingen door leden",
      columns: [
        { name: "Member_id", description: "" },
        { name: "Transaction_date", description: "UNIX Timestamp" },
        { name: "Payment_type", description: "Betalingsclassificatie" },
        { name: "Transaction_amount", description: "Grootte van de betaling in [currency]" }
      ]
    },
    {
      id: "visits",
      name: "Visits",
      description: "Set van alle bezoeken",
      columns: [
        { name: "Club_id", description: "" },
        { name: "Member_id", description: "" },
        { name: "Visit_date", description: "Datum van bezoek" },
        { name: "Checkin", description: "Timestamp of checkin" },
        { name: "Checkout", description: "Timestamp of checkout" }
      ]
    },
    {
      id: "members-aggregate",
      name: "MembersAggregate",
      description: "Geaggregeerde waardes m.b.t. leden",
      columns: [
        { name: "Club_id", description: "" },
        { name: "Date", description: "" },
        { name: "Classification", description: "Classificatie van de geaggregeerde waarde" },
        { name: "Value", description: "Waarde van aggregatie" }
      ]
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Dataset Overzicht</h2>
          <p className="text-lg text-gray-600">
            Overzicht van alle beschikbare datasets voor de analyse.
          </p>
        </div>
        
        <Tabs defaultValue={datasets[0].id} className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-6 overflow-x-auto w-full">
            {datasets.slice(0, 10).map((dataset) => (
              <TabsTrigger key={dataset.id} value={dataset.id} className="whitespace-nowrap">
                {dataset.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {datasets.map((dataset) => (
            <TabsContent key={dataset.id} value={dataset.id}>
              <Card className="card-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{dataset.name}</h3>
                  <p className="text-gray-600 mb-6">{dataset.description}</p>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Kolom</th>
                          <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Beschrijving</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataset.columns.map((column, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="py-3 px-4 text-sm text-gray-900 font-medium">{column.name}</td>
                            <td className="py-3 px-4 text-sm text-gray-600">{column.description || "-"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default DatasetsOverview;
