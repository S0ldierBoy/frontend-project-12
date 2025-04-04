import styled from 'styled-components';
import StyledButton from '../styles/styledButton.js';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
  text-align: center;
  font-size: 75px;
  color: white;
  overflow: hidden;

  h1 {
    font-size: 100px;
    margin-top: 100px;
  }
`;

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <h1>{t('pages.notFound.title')}</h1>
      <p>{t('pages.notFound.message')}</p>
      <StyledButton to="/login">{t('pages.notFound.button')}</StyledButton>
    </Wrapper>
  );
};

export default NotFoundPage;
