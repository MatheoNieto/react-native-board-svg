import {CreateFlashing} from '@application/useCases/flashing/createFlashing';
import {UpdateFlashing} from '@application/useCases/flashing/updateFlashing';
import {FLASHINGS_DATA} from '@domain/entities/flashing';
import {useFlashingRepository} from '@infrastructure/repositories/flashingContextRepository';

export const useFlashing = () => {
  const repo = useFlashingRepository();
  const createFlashing = new CreateFlashing(repo);
  const updateFlashing = new UpdateFlashing(repo);

  return {
    create: (data: FLASHINGS_DATA) => createFlashing.execute(data),
    update: (data: Partial<FLASHINGS_DATA>) => updateFlashing.execute(data),
  };
};
