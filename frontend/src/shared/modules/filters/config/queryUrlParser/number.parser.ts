import { NumberFilterValue } from '@/shared/modules/filters/types/filterTypes/NumberFilterConfig';
import { FilterNumberOperator } from '@/shared/modules/filters/config/constants/number.constants';

interface QueryUrlNumberValue {
  operator: string,
  value: string,
  valueTo: string,
  include: string,
}

export const numberQueryUrlParser = (query: QueryUrlNumberValue): NumberFilterValue => {
  const obj: NumberFilterValue = {
    operator: query.operator as FilterNumberOperator,
    include: query.include === 'true',
    value: +query.value,
    valueTo: +query.valueTo || '',
  };
  if (obj.operator !== FilterNumberOperator.BETWEEN) {
    delete obj.valueTo;
  }
  return obj;
};
