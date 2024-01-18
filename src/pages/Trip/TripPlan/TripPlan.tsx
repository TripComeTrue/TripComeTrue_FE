import { useState } from 'react';
import TripPlanPosting from '@/components/Trip/TripPlan/TripPlanPostingPlan/TripPlanPostingPlan';
import {
  TripPlanDate,
  TripPlanCountry,
  TripPlanCity,
} from '../../../components/Trip/TripPlan';
import {
  TripPlanNextButton,
  TripPlanPrevButton,
} from '@/components/Trip/TripPlan/TripPlanCommon/TripPlanCommon';

interface StepProps<Case extends number> {
  caseBy: Partial<Record<Case, JSX.Element | null>>;
  value: Case;
}

const CheckEachStep = <Case extends number>({
  value,
  caseBy,
}: StepProps<Case>) => {
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
    <>
      <TripPlanPrevButton onClick={handleGoPrev} />
      <CheckEachStep
        value={step}
        caseBy={{
          1: <TripPlanDate />,
          2: <TripPlanCountry />,
          3: <TripPlanCity />,
          4: <TripPlanPosting />,
        }}
      />
      <TripPlanNextButton onClick={handleGoNext} />
    </>
  );
};

export default TripPlan;
