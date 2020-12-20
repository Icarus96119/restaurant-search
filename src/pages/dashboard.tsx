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
    dispatch(requestAvailableRestaurants('', new Date().toISOString()));
  }, []);

  const onSearch = () => {
    dispatch(requestAvailableRestaurants(keyword, new Date().toISOString()));
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
          (<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {restaurants.map((restaurant, index) => <div className="mb-4 px-4" key={index}><RestaurantCard name={restaurant.name} openAt={restaurant.openAt} closeAt={restaurant.closeAt} closesSoon={restaurant.closesSoon}/></div>)}
          </div>) : (<div className="w-full items-center justify-center">Loading...</div>)
        }
      </div>
    </div>);
}