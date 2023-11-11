import { useLocation } from 'react-router-dom';
import { List, ItemLink, ListItem } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(movie => {
        return (
          <ListItem key={movie.id}>
            <ItemLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </ItemLink>
          </ListItem>
        );
      })}
    </List>
  );
};
export default MoviesList;
