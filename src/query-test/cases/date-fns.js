import isAfter from 'date-fns/is_after';
import { DATE_A, DATE_B } from '../constants';

export const dateFnsCase = () =>
    isAfter(DATE_A, DATE_B);
