import React, { useEffect, useState } from 'react';
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import RestaurantCard from '../components/RestaurantCard';
import { useDispatch, useSelector } from 'react-redux';
import { requestAvailableRestaurants } from '../redux/actions';
import { selectLoadingState, selectRestaurants } from '../redux/selectors';
import { LoadingState } from '../core/enums';

export default function Dashboard() {
  const dispatch = useDispatch();
  const restaurants = useSelector(selectRestaurants);
  const loadingState = useSelector(selectLoadingState);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const now = new Date();
    dispatch(requestAvailableRestaurants('', now.toISOString()));
  }, []);

  const onSearch = () => {
    const now = new Date();
    dispatch(requestAvailableRestaurants(keyword, now.toISOString()));
  };

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="w-full py-8 flex items-center">
          <div className="mr-4 flex-grow">
            <Textfield name="basic" placeholder="Search for restaurant name" css="" value={keyword} onChange={elm => setKeyword(elm.currentTarget.value)}/>
          </div>
          <Button onClick={onSearch}>Search</Button>
        </div>
        {loadingState === LoadingState.Loaded ?
        (<div className="w-full mt-6">
          {restaurants.map((restaurant, index) => <RestaurantCard key={index} name={restaurant.name} openAt={restaurant.openAt} closesSoon={restaurant.closesSoon}/>)}
        </div>) : (<div className="w-full items-center justify-center">Loading...</div>)}
      </div>
    </div>);
}