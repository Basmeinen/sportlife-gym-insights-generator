
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { generateDatasets, convertToCSV } from '@/utils/dataGenerator';
import { ArrowLeft, Download } from 'lucide-react';

const Dashboard = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDatasets, setGeneratedDatasets] = useState<any>(null);
  
  const handleGenerateDataset = () => {
    setIsGenerating(true);
    
    // Use setTimeout to simulate processing time
    setTimeout(() => {
      try {
        const datasets = generateDatasets();
        setGeneratedDatasets(datasets);
        toast.success('Dataset succesvol gegenereerd!');
      } catch (error) {
        console.error('Error generating datasets:', error);
        toast.error('Er is een fout opgetreden bij het genereren van de dataset.');
      } finally {
        setIsGenerating(false);
      }
    }, 1500);
  };
  
  const downloadCSV = (datasetName: string) => {
    if (!generatedDatasets || !generatedDatasets[datasetName]) {
      toast.error(`Dataset ${datasetName} niet beschikbaar.`);
      return;
    }
    
    const csv = convertToCSV(generatedDatasets[datasetName]);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${datasetName}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-duxblue hover:text-duxblue/80 mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Terug naar home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold gradient-text">Dashboard</h1>
          <p className="text-lg text-gray-600 mt-2 max-w-3xl">
            Hier kun je beginnen met de analyse door datasets te genereren en te downloaden voor verder onderzoek.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
          <div className="md:col-span-8">
            <Card className="card-shadow h-full">
              <CardHeader>
                <CardTitle>Dataset Generator</CardTitle>
                <CardDescription>
                  Genereer een nieuwe dataset voor analyse van de SportLife Gym KPI's.
                  Elke gegenereerde dataset zal anders zijn maar voldoet aan de opdracht criteria.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={handleGenerateDataset} 
                  disabled={isGenerating}
                  className="bg-duxblue hover:bg-duxblue-dark w-full md:w-auto"
                >
                  {isGenerating ? 'Bezig met genereren...' : 'Genereer nieuwe dataset'}
                </Button>
                
                {generatedDatasets && (
                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-4">Gegenereerde datasets</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {Object.keys(generatedDatasets).map((datasetName) => (
                        <Card key={datasetName} className="bg-gray-50">
                          <CardContent className="p-4 flex justify-between items-center">
                            <div>
                              <p className="font-medium">{datasetName}</p>
                              <p className="text-sm text-gray-500">
                                {generatedDatasets[datasetName].length} rijen
                              </p>
                            </div>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => downloadCSV(datasetName)}
                            >
                              <Download className="h-4 w-4 mr-1" />
                              CSV
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-4">
            <Card className="card-shadow h-full">
              <CardHeader>
                <CardTitle>Volgende stappen</CardTitle>
                <CardDescription>
                  Hoe ga je verder met de gegenereerde datasets?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-gray-700">
                    <span className="font-medium">Download de datasets</span>
                    <p className="text-sm text-gray-500 mt-1 ml-5">
                      Na het genereren kun je elke dataset als CSV downloaden voor analyse.
                    </p>
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Reverse engineer de KPI's</span>
                    <p className="text-sm text-gray-500 mt-1 ml-5">
                      Onderzoek de data en bepaal welke velden nodig zijn voor de KPI's.
                    </p>
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Visualiseer de resultaten</span>
                    <p className="text-sm text-gray-500 mt-1 ml-5">
                      Bouw een dashboard om de KPI's per club en in totaal te tonen.
                    </p>
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Verifieer je resultaten</span>
                    <p className="text-sm text-gray-500 mt-1 ml-5">
                      Controleer of je resultaten overeenkomen met de originele logica.
                    </p>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Voorbeeld KPI's</h2>
          <p className="text-gray-600 mb-6">
            Hier zie je enkele voorbeeld visualisaties van KPI's die je kunt maken met de gegenereerde datasets.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Leden per club</CardTitle>
                <CardDescription>
                  Totaal aantal leden per club
                </CardDescription>
              </CardHeader>
              <CardContent className="h-60 bg-gray-100 flex items-center justify-center">
                <p className="text-gray-500">Bar chart visualisatie hier</p>
              </CardContent>
            </Card>
            
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Churn rate</CardTitle>
                <CardDescription>
                  Percentage leden dat opzegt per maand
                </CardDescription>
              </CardHeader>
              <CardContent className="h-60 bg-gray-100 flex items-center justify-center">
                <p className="text-gray-500">Line chart visualisatie hier</p>
              </CardContent>
            </Card>
            
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Nieuwe vs vertrekkende leden</CardTitle>
                <CardDescription>
                  Vergelijking tussen nieuwe en vertrekkende leden
                </CardDescription>
              </CardHeader>
              <CardContent className="h-60 bg-gray-100 flex items-center justify-center">
                <p className="text-gray-500">Bar chart visualisatie hier</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
