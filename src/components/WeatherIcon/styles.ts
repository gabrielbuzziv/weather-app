import styled, { css } from 'styled-components/native';

interface Icon {
  size: 'small' | 'large' | 'largest';
}

export const Image = styled.Image<Icon>`
  ${(props) => props.size === 'small' && css`
    height: 70px;
    width: 70px;
  `}

  ${(props) => props.size === 'large' && css`
    height: 100px;
    width: 100px;
  `}

  ${(props) => props.size === 'largest' && css`
    height: 120px;
    width: 120px;
  `}
`;
