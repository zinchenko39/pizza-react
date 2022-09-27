import React, { useCallback } from 'react';
import { Categories, SortPopUp, PizzaBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux//actions/filters.js';

const categoryNames = [
  'Мясные',
  'Вегетерианские',
  'Гриль',
  'Острые',
  'Закрытые',
];
const sortNames = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames} />
        <SortPopUp items={sortNames} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Home;
