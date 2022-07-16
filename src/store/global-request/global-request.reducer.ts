import { AxiosError } from 'axios';

import {
  REQUEST_FAILED,
  REQUEST_FAILED_NETWORK,
  REQUEST_STARTED,
  REQUEST_SUCCEEDED,
} from './global-request.constants';
import {
  CLEAR_REQUEST_FAILED,
  ErrorRequestState,
  GlobalRequestActions,
  GlobalRequestState,
} from './global-request.types';

const initialState: GlobalRequestState = {};

const reducer = (
  state = initialState,
  action: GlobalRequestActions
): GlobalRequestState => {
  const requestType = action?.payload?.requestType;

  switch (action.type) {
    case CLEAR_REQUEST_FAILED: {
      return initialState;
    }

    case REQUEST_STARTED:
      return {
        ...state,
        [requestType]: {
          ...state[requestType],
          isLoading: true,
          errorMessage: '',
          errors: {},
        },
      };

    case REQUEST_SUCCEEDED:
      return {
        ...state,
        [requestType]: {
          ...state[requestType],
          isLoading: false,
          errorMessage: '',
          errors: {},
        },
      };

    case REQUEST_FAILED_NETWORK:
    case REQUEST_FAILED: {
      const data = action.payload.data;
      const errData: ErrorRequestState = data.hasOwnProperty('response')
        ? ((data as unknown as AxiosError)?.response?.data as ErrorRequestState)
        : (action.payload.data as ErrorRequestState);

      return {
        ...state,
        [requestType]: {
          ...state[requestType],
          isLoading: false,
          errorMessage: errData?.errorMessage,
          errors: errData?.errors || {},
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;
