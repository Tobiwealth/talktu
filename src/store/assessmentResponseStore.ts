import { create } from "zustand";

type AssessmentResponse = {
    assessmentId: string;
    childId: string;
    steps: {
      stepId: string;
      answers: {
          questionId: string;
          response: {
              key: string; 
              value: string | number | null;
              followUpAnswer?: string|number|null; 
          };
      }[];
    }[];
};
type Response = {
  childId: string;
  assessmentId: string;
  stepId: string;
  questionId: string;
  type: string;
  value: string | number | null;
  followUpAnswer?: string|number|null; 
}

type AssessmentStore = {
  assessmentResponse: AssessmentResponse | null;
  addAssessmentResponse: (response:Response) => void;
};

export const useAssessmentResponseStore = create<AssessmentStore>((set, get) => ({
  assessmentResponse: null,
	addAssessmentResponse: (response: Response) => {
    set((state) => {
      const { assessmentResponse } = state;

      // If there's no existing assessmentResponse, initialize it
      if (!assessmentResponse) {
        return {
          assessmentResponse: {
            childId: response.childId,
            assessmentId: response.assessmentId,
            steps: [
              {
                stepId: response.stepId,
                answers: [
                  {
                    questionId: response.questionId,
                    response: {
                      key: response.type,
                      value: response.value,
                      followUpAnswer: response.followUpAnswer,
                    },
                  },
                ],
              },
            ],
          },
        };
      }

      // Update existing assessmentResponse
      assessmentResponse.childId = response.childId;
      assessmentResponse.assessmentId = response.assessmentId;

      // Find the step
      const existingStep = assessmentResponse.steps.find(
        (step) => step.stepId === response.stepId
      );

      if (existingStep) {
        // Check if the question exists in answers
        const questionExists = existingStep.answers.find(
          (answer) => answer.questionId === response.questionId
        );

        // Update or add the question response
        const updatedAnswers = questionExists
          ? existingStep.answers.map((answer) =>
              answer.questionId === response.questionId
                ? {
                    ...answer,
                    response: {
                      key: response.type,
                      value: response.value,
                      followUpAnswer: response.followUpAnswer || null,
                    },
                  }
                : answer
            )
          : [
              ...existingStep.answers,
              {
                questionId: response.questionId,
                response: {
                  key: response.type,
                  value: response.value,
                  followUpAnswer: response.followUpAnswer || null,
                },
              },
            ];

        // Update the step
        const updatedSteps = assessmentResponse.steps.map((step) =>
          step.stepId === response.stepId
            ? { ...step, answers: updatedAnswers }
            : step
        );

        return { assessmentResponse: { ...assessmentResponse, steps: updatedSteps } };
      } else {
        // Add a new step
        return {
          assessmentResponse: {
            ...assessmentResponse,
            steps: [
              ...assessmentResponse.steps,
              {
                stepId: response.stepId,
                answers: [
                  {
                    questionId: response.questionId,
                    response: {
                      key: response.type,
                      value: response.value,
                      followUpAnswer: response.followUpAnswer || null,
                    },
                  },
                ],
              },
            ],
          },
        };
      }
    });
  },
}));