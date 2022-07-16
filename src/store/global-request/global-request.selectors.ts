import { FormErrorsInterface } from 'shared/interfaces/form-errors.interface';
import { RootState } from '../reducers';
import { DefaultRequestState } from './global-request.types';

export const selectRequestIsLoading =
  (requestType: string) =>
  (state: RootState): boolean => {
    return state.currentRequest.hasOwnProperty(requestType)
      ? state.currentRequest[requestType].isLoading
      : false;
  };

export const selectAreRequestsLoading =
  (requestTypes: string[]) =>
  (state: RootState): boolean => {
    return requestTypes.some((request) => {
      return (
        state.currentRequest.hasOwnProperty(request) &&
        state.currentRequest[request].isLoading
      );
    });
  };

export const selectRequestErrorMessage =
  (requestType: string) =>
  (state: RootState): string => {
    return state.currentRequest.hasOwnProperty(requestType)
      ? state.currentRequest[requestType].errorMessage || ''
      : '';
  };

export const selectRequestFormErrors =
  (requestType: string) =>
  (state: RootState): FormErrorsInterface => {
    return state.currentRequest.hasOwnProperty(requestType)
      ? state.currentRequest[requestType].errors || {}
      : {};
  };

export const selectRequestErrors =
  (requestType: string, mainErrorKey = 'name') =>
  (state: RootState): FormErrorsInterface => {
    const currentRequest: DefaultRequestState =
      state.currentRequest[requestType];

    const mainError = currentRequest?.errorMessage;
    let errors = { ...currentRequest?.errors };

    if (Object.keys(errors).length === 0 && mainError) {
      errors = {
        ...errors,
        [mainErrorKey]: [mainError],
      };
    }

    return errors;
  };
