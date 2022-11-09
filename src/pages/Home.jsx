import React, { useCallback, useEffect } from 'react';
import { Categories, SortPopUp, PizzaBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux//actions/filters.js';
// import { fetchPizzas } from '../redux/actions/pizzas.js';
import { addPizzaToCart } from '../redux/actions/cart.js';
import PizzaLoadingBlock from '../components/PizzaBlock/PizzaLoadingBlock.jsx';
import { dataPizzas } from '../data';

const categoryNames = [
  'Мясные',
  'Вегетерианские',
  'Гриль',
  'Острые',
  'Закрытые',
];
const sortNames = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Home() {
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'SET_PIZZAS',
      payload: dataPizzas,
    });
    // dispatch(fetchPizzas(sortBy, category));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, sortBy]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleAddPizza = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickItem={onSelectCategory}
          items={categoryNames}
        />
        <SortPopUp
          activeSortType={sortBy.type}
          items={sortNames}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">
        {category === null ? 'Все пиццы' : categoryNames[category]}
      </h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizza}
                key={obj.id}
                cartCount={
                  cartItems[obj.id] ? cartItems[obj.id].items.length : 0
                }
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
