import styled from 'styled-components';

type BorderProps = {
  border: boolean;
};

export const Container = styled.div<BorderProps>`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  border-bottom: ${({ border }) => (border ? '1px solid #000' : '')};
  margin: 8px 0;
`;

export const TextContainer = styled.div<BorderProps>`
  width: 100%;
  border-bottom: ${({ border }) => (border ? '1px solid #000' : '')};
`;

export const LabelData = styled.span`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 11px;
  line-height: 12px;
  margin-bottom: 11px;
  display: block;
`;

export const TextData = styled(LabelData)`
  font-weight: 400;
  font-size: 14px;
`;
