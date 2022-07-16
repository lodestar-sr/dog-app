import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';

import { Button, Input, Modal } from '../../components';
import {
  GET_BREED_IMAGE,
  getBreedImageAction,
  getBreedListAction,
  selectBreedImage,
  selectBreedList,
} from '../../store/breed';
import { selectRequestIsLoading } from '../../store/global-request';

import './styles.scss';

const Board: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();

  const [searchKey, setSearchKey] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const setFinalSearchKey = debounce((key: string) => setSearchKey(key), 500);

  const isImageLoading = useSelector(selectRequestIsLoading(GET_BREED_IMAGE));
  const breedList = useSelector(selectBreedList);
  const breedImage = useSelector(selectBreedImage);

  const filteredList = useMemo(() => {
    return breedList.filter((breed) =>
      breed.toLowerCase().includes(searchKey.toLowerCase())
    );
  }, [breedList, searchKey]);

  useEffect(() => {
    dispatch(getBreedListAction());
  }, [dispatch]);

  useEffect(() => {
    if (selectedBreed) {
      dispatch(getBreedImageAction(selectedBreed));
    }
  }, [dispatch, selectedBreed]);

  const handleModalClose = (isSaving?: boolean) => {
    if (isSaving) {
      dispatch(getBreedImageAction(selectedBreed));
    } else {
      setSelectedBreed('');
    }
  };

  return (
    <div className="board-container">
      <div className="page-header">
        <span className="text-white text-4xl font-bold">Dog App</span>
      </div>
      <div className="main-board">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-xl text-gray-800">
            Breed list - Showing {filteredList.length || 0} breeds
          </span>
          <Input
            className="text-lg"
            placeholder="Search"
            defaultValue=""
            onChange={(e) => setFinalSearchKey(e.target.value)}
          />
        </div>
        <div className="table-section">
          <div className="grid grid-cols-2 gap-5">
            {filteredList.map((breed) => (
              <Button
                key={breed}
                className="bg-blue-100 text-gray-800 hover:text-white capitalize"
                onClick={() => setSelectedBreed(breed)}
              >
                {breed}
              </Button>
            ))}
          </div>
        </div>
        {selectedBreed && (
          <Modal
            title={selectedBreed}
            confirmLabel="Re-fetch"
            headerClassName="font-bold"
            bodyClassName="dog-body"
            confirmDisabled={isImageLoading}
            onClose={handleModalClose}
          >
            <img src={breedImage} alt="dog" width={300} height={300} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Board;
