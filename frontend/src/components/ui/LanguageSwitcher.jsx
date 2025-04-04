import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';
import { StyledDropdown } from './StyledLanguageSwitcher.jsx';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (lang) => {
    return i18n.changeLanguage(lang);
  };
  return (
    <StyledDropdown>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          🌐
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleChange('ru')}>RU</Dropdown.Item>
          <Dropdown.Item onClick={() => handleChange('en')}>EN</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </StyledDropdown>
  );
};

export default LanguageSwitcher;
