import { NavLinkStyled } from './AdditionalInfo.styled';

const AdditionalInfo = () => {
  return (
    <div>
      <h5>Additional Information</h5>
      <ul>
        <li key={'cast'}>
          <NavLinkStyled to={'cast'}>Cast</NavLinkStyled>
        </li>
        <li key={'reviews'}>
          <NavLinkStyled to={'reviews'}>Reviews</NavLinkStyled>
        </li>
      </ul>
    </div>
  );
};

export default AdditionalInfo;
