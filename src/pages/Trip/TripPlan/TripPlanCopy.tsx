import { useState } from 'react';
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

export interface TripCopyDateProps {
  startDate: Date;
  endDate: Date;
}

const CheckEachStep = ({ value, caseBy }: StepProps) => {
  return caseBy[value] || <div>Step not found</div>;
};

const TripPlanCopy = () => {
  const [step, setStep] = useState<number>(1);
  const totalSteps = 2;

  const [dateRange, setDateRange] = useState<TripCopyDateProps>({
    startDate: new Date(),
    endDate: new Date(),
  });

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
          1: (
            <TripPlanCopyingCalendar
              dateRange={dateRange}
              setDateRange={setDateRange}
            />
          ),
          2: (
            <TripPlanCopyingPlan
              startDate={dateRange.startDate}
              endDate={dateRange.endDate}
            />
          ),
        }}
      />
      {step < totalSteps && <TripPlanNextButton onClick={handleGoNext} />}
    </>
  );
};

export default TripPlanCopy;
