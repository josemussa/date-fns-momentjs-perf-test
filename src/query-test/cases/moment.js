import moment from 'moment';
import { DATE_A, DATE_B } from '../constants';

export const momentCase = () =>
    moment(DATE_A).isAfter(DATE_B);
