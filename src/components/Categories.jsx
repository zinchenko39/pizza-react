import React, { memo } from 'react';

const Categories = memo(function Categories({
  items,
  onClickItem,
  activeCategory,
}) {
  const onSelectCategory = (index) => {
    onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onSelectCategory(null)}
        >
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? 'active' : ''}
              onClick={() => onSelectCategory(index)}
              key={`name_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});
Categories.defaultProps = { items: [], activeCategory: null };

export default Categories;
