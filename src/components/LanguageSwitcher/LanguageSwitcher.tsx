import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { GlobalOutlined } from '@ant-design/icons';
import { RU } from 'country-flag-icons/react/3x2';
import { GB } from 'country-flag-icons/react/3x2';
import { KZ } from 'country-flag-icons/react/3x2';
import { CN } from 'country-flag-icons/react/3x2';
import AnimatedDropdownBackground from './AnimatedDropdownBackground';
import './LanguageSwitcher.css';

const languages = [
  {
    code: 'ru',
    name: 'Русский',
    flag: RU,
  },
  {
    code: 'en',
    name: 'English',
    flag: GB,
  },
  {
    code: 'kk',
    name: 'Қазақша',
    flag: KZ,
  },
  {
    code: 'zh',
    name: '中文',
    flag: CN,
  },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('language', langCode);
  };

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const menuItems: MenuProps['items'] = languages.map((lang) => {
    const FlagIcon = lang.flag;
    return {
      key: lang.code,
      label: (
        <div className="language-menu-item">
          <FlagIcon className="language-flag" />
          <span className="language-name">{lang.name}</span>
        </div>
      ),
      onClick: () => handleLanguageChange(lang.code),
    };
  });

  const CurrentFlag = currentLanguage.flag;

  return (
    <Dropdown
      menu={{ items: menuItems }}
      placement="bottomRight"
      trigger={['click']}
      overlayClassName="language-dropdown"
      popupRender={(menu) => (
        <div className="language-dropdown-wrapper">
          <AnimatedDropdownBackground />
          {menu}
        </div>
      )}
    >
      <button className="language-switcher-button">
        <CurrentFlag className="language-flag-current" />
        <GlobalOutlined className="language-icon" />
      </button>
    </Dropdown>
  );
};

export default LanguageSwitcher;

