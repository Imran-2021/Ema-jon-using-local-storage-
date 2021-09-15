import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Products from '../Products/Products';

const ReviewDetails = () => {
    const {asdf} = useParams()
   let datae = fakeData.find(x=>x.key===asdf)
   console.log(datae)
    return (
        <div>
          
        <Products showBTN={false} x={datae} />
        </div>
    );
};

export default ReviewDetails;