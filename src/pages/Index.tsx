
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import AssignmentDescription from '@/components/AssignmentDescription';
import DatasetsOverview from '@/components/DatasetsOverview';
import BusinessRulesSection from '@/components/BusinessRulesSection';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AssignmentDescription />
      <DatasetsOverview />
      <BusinessRulesSection />
      <CallToAction />
    </Layout>
  );
};

export default Index;
