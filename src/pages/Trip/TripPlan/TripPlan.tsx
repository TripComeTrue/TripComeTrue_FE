import { useState } from 'react';
import {
  TripPlanDate,
  TripPlanCountry,
  TripPlanCity,
} from '../../../components/Trip/TripPlan';
import {
  TripPlanNextButton,
  TripPlanPrevButton,
} from '@/components/Trip/TripPlan/TripPlanCommon/TripPlanCommon';
import { TripFormDataProvider } from './TripFormDataContext';
import TripPlanPostingPlan from '@/components/Trip/TripPlan/TripPlanPostingPlan/TripPlanPostingPlan';

interface StepProps {
  caseBy: Record<number, JSX.Element | null>;
  value: number;
}

const CheckEachStep = ({ value, caseBy }: StepProps) => {
  return caseBy[value] || <div>Step not found</div>;
};

const TripPlan = () => {
  const [step, setStep] = useState<number>(1);
  const totalSteps = 4;

  const handleGoPrev = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const handleGoNext = () => {
    if (step < totalSteps) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <TripFormDataProvider>
      <TripPlanPrevButton onClick={handleGoPrev} />
      <CheckEachStep
        value={step}
        caseBy={{
          1: <TripPlanDate />,
          2: <TripPlanCountry />,
          3: <TripPlanCity />,
          4: <TripPlanPostingPlan />,
        }}
      />
      {step < totalSteps && <TripPlanNextButton onClick={handleGoNext} />}
    </TripFormDataProvider>
  );
};

export default TripPlan;
