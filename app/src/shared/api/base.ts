import ky from 'ky';
import { getEnvVariable } from 'shared/lib/helpers';

export const api = ky.create({ prefixUrl: getEnvVariable('VITE_API_URL') });