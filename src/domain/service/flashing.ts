export class FlashingService {
  calculateMaterialLength(width: number, height: number) {
    return width * 2 + height * 2;
  }

  validateDimensions(width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Dimensions must be positive numbers.');
    }
  }
}
