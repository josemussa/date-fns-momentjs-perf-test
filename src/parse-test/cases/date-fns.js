import parse from 'date-fns/parse';
import { DATE_AS_STRING } from '../constants';

export const dateFnsCase = () =>
    parse(DATE_AS_STRING);
