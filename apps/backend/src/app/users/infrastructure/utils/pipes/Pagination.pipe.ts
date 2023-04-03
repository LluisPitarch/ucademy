import { PipeTransform, Injectable } from '@nestjs/common';
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

@Injectable()
export class PagePipe implements PipeTransform {
  transform(value: string | null): number {
    if (!value) {
      return 0;
    }
    const numericValue = parseInt(value, 10);

    if (!isNumber(numericValue)) {
      throw new Error('page value is not valid');
    }
    return numericValue;
  }
}

@Injectable()
export class PageSizePipe implements PipeTransform {
  transform(value: string | null): number {
    if (!value) {
      return 10;
    }
    const numericValue = parseInt(value, 10);

    if (!isNumber(numericValue)) {
      throw new Error('pageSize value is not valid');
    }
    return numericValue;
  }
}
