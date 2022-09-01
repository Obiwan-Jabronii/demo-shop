import React, { useEffect} from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/actions';

function Success() {
    return (
      <div>
          <h1>Success!</h1>
          <h2>
            Thank you for your purchase!
          </h2>
          <h2>
            You will now be redirected to the homepage
          </h2>
        
      </div>
    );
  };
  
export default Success;