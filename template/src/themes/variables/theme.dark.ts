import { DarkTheme } from '@react-navigation/native';
import { ThemeVariables } from '../../types/theme';

// Dark Theme Overriding Variables
const theme: Partial<ThemeVariables> = {
  navigationTheme: {
    ...DarkTheme,
  },
  colors: {
    primary: '#4D4D4D',
    secondary: '#6C6C6C',
    accent: '#F7DC6F',
    background: '#1C1C1C',
    text: '#FFFFFF',
    placeholder: '#BDBDBD',
    error: '#FF5252',
  },
};

export default theme;
