import moment from 'moment';
import { FORMAT } from '../constants';

export const momentCase = () =>
    moment().format(FORMAT);
