import format from 'date-fns/format';
import { FORMAT } from '../constants';

export const dateFnsCase = () =>
    format(new Date(), FORMAT);
