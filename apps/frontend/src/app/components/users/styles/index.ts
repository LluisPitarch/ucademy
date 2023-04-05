import styled from 'styled-components';

export const LabelData = styled.span`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 11px;
  line-height: 24px;
  display: block;
`;

export const TextData = styled(LabelData)`
  font-weight: 400;
  font-size: 14px;
`;

export const TabsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 33px;
`;

export const ActionButtonsContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 24px;
  display: flex;
  gap: 8px;
`;

export const ModalFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const UserViewContainer = styled.div`
  max-width: 320px;
  margin: 0 auto;
`;
