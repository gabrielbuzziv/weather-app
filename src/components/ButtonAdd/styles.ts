import styled from 'styled-components/native';

import { BorderlessButton } from 'react-native-gesture-handler';
import { theme } from '../../styles/theme';

export const Button = styled(BorderlessButton)`
  background-color: ${theme.colors.heading};
  height: 48px;
  width: 48px;
  border-radius: 12px;
  
  align-items: center;
  justify-content: center;
`;

