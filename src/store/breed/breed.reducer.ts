import {
  BreedActionTypes,
  BreedState,
  SET_BREED_IMAGE,
  SET_BREED_LIST,
} from './breed.types';

const initialState: BreedState = {
  breedList: {},
  breedImage: '',
};

const reducer = (
  state = initialState,
  action: BreedActionTypes
): BreedState => {
  switch (action.type) {
    case SET_BREED_LIST: {
      return {
        ...state,
        breedList: action.payload.data,
      };
    }

    case SET_BREED_IMAGE: {
      return {
        ...state,
        breedImage: action.payload.data,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
