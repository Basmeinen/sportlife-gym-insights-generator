
interface Member {
  Member_id: string;
  First_name: string;
  Last_name: string;
  Adress1: string;
  City1: string;
  Adress2: string | null;
  City2: string | null;
  Home_club_id: string;
  Join_date: string;
}

interface Subscription {
  Member_id: string;
  Subscription_type: string;
  Billing_type: string;
  Billing_price: number;
  JoinDate: string;
  RenewalDate: string;
  BillingDate: string;
  ObligationDate: string;
  TerminationDate: string | null;
  TerminationReason: string | null;
}

interface Club {
  Club_id: string;
  Club_name: string;
  Club_adress: string;
}

interface FrozenMember {
  Member_id: string;
  Freeze_start: number;
  Freeze_end: number | null;
}

interface DebtMember {
  Club_id: string;
  Member_id: string;
  Debt: number;
}

interface MemberPayment {
  Member_id: string;
  Transaction_date: number;
  Payment_type: string;
  Transaction_amount: number;
}

interface Visit {
  Club_id: string;
  Member_id: string;
  Visit_date: string;
  Checkin: number;
  Checkout: number;
}

interface MemberAggregate {
  Club_id: string;
  Date: string;
  Classification: string;
  Value: number;
}

// Helper functions for data generation
const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomElement = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

const getRandomDate = (start: Date, end: Date): string => {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date.toISOString().split("T")[0];
};

const getRandomTimestamp = (start: Date, end: Date): number => {
  return Math.floor(
    start.getTime() / 1000 +
      Math.random() * ((end.getTime() - start.getTime()) / 1000)
  );
};

// Data generation functions
export const generateDatasets = () => {
  const firstNames = [
    "Jan", "Piet", "Klaas", "Mohammed", "Sara", "Anna", "Lisa", "Fatima", 
    "Emma", "Thomas", "Lars", "Sophie", "Daan", "Finn", "Lieke", "Sanne"
  ];
  
  const lastNames = [
    "de Jong", "Jansen", "Visser", "Bakker", "Smit", "Meijer", "de Vries", 
    "van den Berg", "van Dijk", "Mulder", "de Boer", "Dekker", "Prins"
  ];
  
  const cities = [
    "Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Eindhoven", "Groningen", 
    "Tilburg", "Almere", "Breda", "Nijmegen", "Arnhem", "Haarlem", "Zaanstad"
  ];
  
  const streets = [
    "Hoofdstraat", "Kerkstraat", "Schoolstraat", "Dorpsstraat", "Molenweg", 
    "Julianaweg", "Stationsweg", "Beatrixstraat", "Wilhelminaplein"
  ];
  
  const clubNames = [
    "SportLife Centrum", "SportLife Zuid", "SportLife West", "SportLife Noord", 
    "SportLife Oost", "SportLife Plaza", "SportLife Station", "SportLife XL"
  ];
  
  const subscriptionTypes = ["Basic", "Premium", "Gold", "Family", "Student"];
  const billingTypes = ["Monthly", "Quarterly", "Yearly"];
  const paymentTypes = ["Direct Debit", "Credit Card", "iDEAL", "PayPal"];
  const terminationReasons = ["Moving", "Financial", "Unhappy", "Health Issues", "Competition", null];
  
  // Generate Clubs
  const numClubs = getRandomInt(5, 10);
  const clubs: Club[] = [];
  
  for (let i = 1; i <= numClubs; i++) {
    clubs.push({
      Club_id: `C${i.toString().padStart(3, '0')}`,
      Club_name: `${getRandomElement(clubNames)} ${i}`,
      Club_adress: `${getRandomElement(streets)} ${getRandomInt(1, 150)}, ${getRandomElement(cities)}`
    });
  }
  
  // Generate Members
  const numMembers = getRandomInt(1000, 3000);
  const members: Member[] = [];
  const subscriptions: Subscription[] = [];
  const frozenMembers: FrozenMember[] = [];
  const debtMembers: DebtMember[] = [];
  const memberPayments: MemberPayment[] = [];
  const visits: Visit[] = [];
  
  for (let i = 1; i <= numMembers; i++) {
    const memberId = `M${i.toString().padStart(6, '0')}`;
    const homeClubId = getRandomElement(clubs).Club_id;
    const hasSecondAddress = Math.random() < 0.2; // 20% chance of having a second address
    const joinDate = getRandomDate(new Date(2018, 0, 1), new Date());
    
    // Create member
    members.push({
      Member_id: memberId,
      First_name: getRandomElement(firstNames),
      Last_name: getRandomElement(lastNames),
      Adress1: `${getRandomElement(streets)} ${getRandomInt(1, 150)}`,
      City1: getRandomElement(cities),
      Adress2: hasSecondAddress ? `${getRandomElement(streets)} ${getRandomInt(1, 150)}` : null,
      City2: hasSecondAddress ? getRandomElement(cities) : null,
      Home_club_id: homeClubId,
      Join_date: joinDate
    });
    
    // Create subscription
    const billingType = getRandomElement(billingTypes);
    let billingPrice;
    switch (getRandomElement(subscriptionTypes)) {
      case "Basic": billingPrice = getRandomInt(20, 30); break;
      case "Premium": billingPrice = getRandomInt(35, 50); break;
      case "Gold": billingPrice = getRandomInt(55, 80); break;
      case "Family": billingPrice = getRandomInt(90, 120); break;
      case "Student": billingPrice = getRandomInt(15, 25); break;
      default: billingPrice = getRandomInt(20, 30);
    }
    
    const renewalDate = getRandomDate(new Date(joinDate), new Date(2025, 11, 31));
    const billingDate = getRandomDate(new Date(joinDate), new Date(renewalDate));
    const obligationDate = getRandomDate(new Date(joinDate), new Date(renewalDate));
    
    // 15% chance of terminated contract
    const isTerminated = Math.random() < 0.15;
    const terminationDate = isTerminated 
      ? getRandomDate(new Date(joinDate), new Date()) 
      : null;
    const terminationReason = isTerminated
      ? getRandomElement(terminationReasons)
      : null;
    
    subscriptions.push({
      Member_id: memberId,
      Subscription_type: getRandomElement(subscriptionTypes),
      Billing_type: billingType,
      Billing_price: billingPrice,
      JoinDate: joinDate,
      RenewalDate: renewalDate,
      BillingDate: billingDate,
      ObligationDate: obligationDate,
      TerminationDate: terminationDate,
      TerminationReason: terminationReason
    });
    
    // 10% chance of having debt
    if (Math.random() < 0.1) {
      debtMembers.push({
        Club_id: homeClubId,
        Member_id: memberId,
        Debt: getRandomInt(20, 500)
      });
      
      // 30% chance of being frozen due to debt
      if (Math.random() < 0.3) {
        const freezeStart = getRandomTimestamp(new Date(2022, 0, 1), new Date());
        const hasFreezeEnd = Math.random() < 0.4; // 40% chance debt is resolved
        
        frozenMembers.push({
          Member_id: memberId,
          Freeze_start: freezeStart,
          Freeze_end: hasFreezeEnd 
            ? freezeStart + getRandomInt(604800, 7776000) // 1 week to 90 days later
            : null
        });
      }
    }
    
    // Generate payments
    const numPayments = getRandomInt(1, 24);
    for (let j = 0; j < numPayments; j++) {
      memberPayments.push({
        Member_id: memberId,
        Transaction_date: getRandomTimestamp(new Date(2021, 0, 1), new Date()),
        Payment_type: getRandomElement(paymentTypes),
        Transaction_amount: getRandomInt(15, 120)
      });
    }
    
    // Generate visits
    const numVisits = getRandomInt(0, 100);
    for (let j = 0; j < numVisits; j++) {
      const visitDate = getRandomDate(new Date(joinDate), new Date());
      const checkinHour = getRandomInt(6, 22);
      const checkoutHour = checkinHour + getRandomInt(1, 3);
      
      const visitDateObj = new Date(visitDate);
      const checkin = new Date(
        visitDateObj.getFullYear(),
        visitDateObj.getMonth(),
        visitDateObj.getDate(),
        checkinHour,
        getRandomInt(0, 59),
        0
      ).getTime() / 1000;
      
      const checkout = new Date(
        visitDateObj.getFullYear(),
        visitDateObj.getMonth(),
        visitDateObj.getDate(),
        checkoutHour,
        getRandomInt(0, 59),
        0
      ).getTime() / 1000;
      
      visits.push({
        Club_id: Math.random() < 0.9 ? homeClubId : getRandomElement(clubs).Club_id, // 90% at home club
        Member_id: memberId,
        Visit_date: visitDate,
        Checkin: checkin,
        Checkout: checkout
      });
    }
  }
  
  // Generate aggregated data
  const memberAggregates: MemberAggregate[] = [];
  const classifications = [
    "TotalMembers", "Joiners", "Leavers", "FrozenMembers", 
    "MembersInDebt", "NetGain", "Churn", "Rejoiners"
  ];
  
  // For each club, generate monthly aggregates for the past year
  clubs.forEach(club => {
    const startDate = new Date();
    startDate.setFullYear(startDate.getFullYear() - 1);
    
    for (let month = 0; month < 12; month++) {
      const currentDate = new Date(startDate);
      currentDate.setMonth(currentDate.getMonth() + month);
      const dateStr = currentDate.toISOString().split("T")[0].substring(0, 7); // YYYY-MM
      
      classifications.forEach(classification => {
        memberAggregates.push({
          Club_id: club.Club_id,
          Date: dateStr,
          Classification: classification,
          Value: getRandomInt(10, 1000)
        });
      });
    }
  });
  
  return {
    MembersDetails: members,
    MembersSubscriptions: subscriptions,
    MembersSubscriptionsDetails: subscriptions.filter(s => !s.TerminationDate), // Only active subscriptions
    Clubs: clubs,
    FrozenMembers: frozenMembers,
    DebtMembers: debtMembers,
    MemberPayments: memberPayments,
    Visits: visits,
    MembersAggregate: memberAggregates
  };
};

// Function to export dataset to CSV
export const convertToCSV = (data: any[]): string => {
  if (data.length === 0) {
    return '';
  }
  
  const headers = Object.keys(data[0]).join(',');
  const rows = data.map(obj => 
    Object.values(obj).map(value => 
      value === null ? '' : typeof value === 'string' ? `"${value.replace(/"/g, '""')}"` : value
    ).join(',')
  ).join('\n');
  
  return `${headers}\n${rows}`;
};
