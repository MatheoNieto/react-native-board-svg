export class BoardService {
  getStepIndex(step: string, steps: string[]) {
    return steps.indexOf(step);
  }

  isLastStep(step: string, steps: string[]) {
    return steps.indexOf(step) === steps.length - 1;
  }
}
