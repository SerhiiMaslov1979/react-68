import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import { RecipeCard } from './RecipesCard';
import PropTypes from 'prop-types';

export const RecipeList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <RecipeCard item={item} />
        </li>
      ))}
    </ul>
  );
};
RecipeList.propTypes = {
  items: PropTypes.arrayOff(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
