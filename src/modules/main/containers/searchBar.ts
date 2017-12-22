import { compose, withHandlers } from 'recompose';
import { fetchCarsAutocomplete } from 'api/cars';
import SearchBar from '../components/searchBar';

export default compose(
  withHandlers({
    handleSearch: () => ({ target }) => {
      if (target.value) {
        fetchCarsAutocomplete(target.value)
          .then(result => {
            console.log('result');
            console.log(result);
          })
      }
    }
  })
)(SearchBar)