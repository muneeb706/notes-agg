import { createContext } from 'react';
import { ApiService } from '../api';
import { createAPIClient } from '../client';

const api = new ApiService(createAPIClient());

export const ApiContext = createContext(api);
