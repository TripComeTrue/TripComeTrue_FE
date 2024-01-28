import { useState } from 'react';
import { TripFormDataProvider } from './TripFormDataContext';
import {
  TripPlanNextButton,
  TripPlanPrevButton,
} from '@/components/Trip/TripPlan/TripPlanCommon/TripPlanCommon';
import TripPlanCopyingCalendar from '@/components/Trip/TripPlan/TripPlanCopyingPlan/TripPlanCopyingCalendar';
import TripPlanCopyingPlan from '@/components/Trip/TripPlan/TripPlanCopyingPlan/TripPlanCopyingPlan';

interface StepProps {
  caseBy: Record<number, JSX.Element | null>;
  value: number;
}

const CheckEachStep = ({ value, caseBy }: StepProps) => {
  return caseBy[value] || <div>Step not found</div>;
};

const TripPlanCopy = () => {
  const [step, setStep] = useState<number>(1);
  const totalSteps = 2;

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
          1: <TripPlanCopyingCalendar />,
          2: <TripPlanCopyingPlan />,
        }}
      />
      {step < totalSteps && <TripPlanNextButton onClick={handleGoNext} />}
    </TripFormDataProvider>
  );
};

export default TripPlanCopy;
