import { AxiosError } from 'axios';
import {
  call,
  CallEffect,
  put,
  PutEffect,
  SelectEffect,
  takeLatest,
} from 'redux-saga/effects';

import {
  GlobalRequestActions,
  setRequestFailedAction,
  setRequestStartedAction,
  setRequestSucceededAction,
} from '../global-request';
import { setBreedImageAction, setBreedListAction } from './breed.actions';
import { getBreedImageApi, getBreedListApi } from './breed.api';
import {
  BreedActionTypes,
  GET_BREED_IMAGE,
  GET_BREED_LIST,
  GetBreedImageAction,
  GetBreedListAction,
} from './breed.types';
import { BreedListModel } from '../../shared/models/breed-list.model';
import { ResponseInterface } from '../../shared/interfaces/response.interface';

function* getBreedListList(
  action: GetBreedListAction
): Generator<
  | CallEffect<ResponseInterface<BreedListModel>>
  | PutEffect<GlobalRequestActions | BreedActionTypes>
  | SelectEffect
  | void
> {
  const { type: actionType } = action;

  try {
    yield put(setRequestStartedAction(actionType));
    const { message } = (yield call(
      getBreedListApi
    )) as ResponseInterface<BreedListModel>;
    yield put(setBreedListAction(message));
    yield put(setRequestSucceededAction(actionType));
  } catch (error) {
    yield put(setRequestFailedAction(actionType, error as AxiosError));
  }
}

function* getBreedImage(
  action: GetBreedImageAction
): Generator<
  | CallEffect<ResponseInterface<string>>
  | PutEffect<GlobalRequestActions | BreedActionTypes>
  | SelectEffect
  | void
> {
  const {
    type: actionType,
    payload: { data: breed },
  } = action;

  try {
    yield put(setRequestStartedAction(actionType));
    const { message } = (yield call(
      getBreedImageApi,
      breed
    )) as ResponseInterface<string>;
    yield put(setBreedImageAction(message));
    yield put(setRequestSucceededAction(actionType));
  } catch (error) {
    yield put(setRequestFailedAction(actionType, error as AxiosError));
  }
}

export default function* breedSaga(): Generator {
  yield takeLatest(GET_BREED_LIST, getBreedListList);
  yield takeLatest(GET_BREED_IMAGE, getBreedImage);
}
