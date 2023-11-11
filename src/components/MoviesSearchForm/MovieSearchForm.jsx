import { useState } from 'react';

const MovieSearchForm = ({ handleSubmit }) => {
  const [selectedMovies, setSelectedMovies] = useState('');

  const onQueryChange = event => {
    setSelectedMovies(event.target.value);
  };

  const onHadleSubmit = event => {
    event.preventDefault();
    if (!selectedMovies) {
      alert('Insert serch word');
      return;
    }
    handleSubmit(selectedMovies);
    setSelectedMovies('');
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <form onSubmit={onHadleSubmit}>
        <input type="text" value={selectedMovies} onChange={onQueryChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default MovieSearchForm;
