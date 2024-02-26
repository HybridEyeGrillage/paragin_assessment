export interface Option {
  text?: string;
  value: string | boolean;
}

export interface Settings {
  id: string | number;
  label?: string;
  name: string;
  options: Option[];
  value: string | boolean;
}

export interface Slider {
  id: string | number;
  name: string;
  label: string;
  value: number;
}

export interface Corrector {
  id: string | number;
  group: string[];
  name: string;
  role: string;
}

export const settings: Settings[] = [
  {
    id: 1,
    label: "Anonymous correction round",
    name: 'anonymousCorrectionRound',
    options: [{ value: false, text: 'No' }, { value: true, text: 'Yes' }],
    value: true
  },
  {
    id: 2,
    label: "Show scores and feedback from previous correction rounds",
    name: 'showPreviousRoundScoreAndFeedback',
    options: [{ value: false, text: 'No' }, { value: true, text: 'Yes' }],
    value: true
  },
  {
    id: 3,
    label: "Previous correction rounds must be completed before this one can start",
    name: 'requirePreviousRoundsToBeCompleted',
    options: [{ value: false, text: 'No' }, { value: true, text: 'Yes' }],
    value: false
  },
  {
    id: 4,
    label: "After checking, the score and feedback can be edited",
    name: 'canEditScoreAndFeedback',
    options: [{ value: false, text: 'No' }, { value: true, text: 'Yes' }],
    value: false
  },
  {
    id: 5,
    label: "The result and grade will be updated based on this correction round",
    name: 'updateResultAndGradeBasedOnCurrentCorrectionRound',
    options: [{ value: false, text: 'No' }, { value: true, text: 'Yes' }],
    value: false
  },
];

export const slider: Slider = {
  id: 6,
  label: "Deadline, the number of days within which the result has to be checked after submission",
  name: 'setTheNumberOfReviewDaysAfterSubmission',
  value: 14
};

export const correctors: Corrector[] = [
  {
    id: 1,
    name: 'Van den Endelagen, C',
    role: 'Test Coordinator',
    group: ['Paragin Medewekers Group XAAS']
  },
  {
    id: 2,
    name: 'Van den Endelagen, C',
    role: 'Test Coordinator',
    group: ['Paragin Medewekers Group XAAS', 'Group 2 XAAS']
  },
  {
    id: 3,
    name: 'Van den Endelagen, C',
    role: 'Test Coordinator',
    group: ['Paragin Medewekers Group XAAS']
  },
  {
    id: 4,
    name: 'Van den Endelagen, C',
    role: 'Test Coordinator',
    group: ['Paragin Medewekers Group XAAS', 'Group 2 XAAS', 'Group 3 XAAS']
  }
];