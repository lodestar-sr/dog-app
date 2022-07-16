import React from 'react';
import { useSelector } from 'react-redux';
import { Audio } from 'react-loader-spinner';

import Board from './board';
import { selectAreRequestsLoading } from '../store/global-request';
import { GET_BREED_IMAGE, GET_BREED_LIST } from '../store/breed';

const App: React.FC = (): React.ReactElement => {
  const isLoading = useSelector(
    selectAreRequestsLoading([GET_BREED_LIST, GET_BREED_IMAGE])
  );

  return (
    <>
      {isLoading && (
        <Audio
          wrapperClass="fixed top-0 left-0 z-[103] w-screen h-screen flex items-center justify-center bg-gray-300/25"
          color="lightblue"
          ariaLabel="loading"
        />
      )}
      <div className="app-container">
        <Board />
      </div>
    </>
  );
};

export default App;
