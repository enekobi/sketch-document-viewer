import React from 'react';
import styled from 'styled-components';
import { CloseButton, Navigation, NavigationProps } from '../molecules';
import { Label } from '../atoms';

type DetailBarProps = NavigationProps & {
  closeRoute: string;
  text: string;
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  img {
    height: max(1vh, 1vw);
    width: auto;
  }

  & > * {
    margin: 0 2%;
  }

  .detail-bar__navigation {
    width: 10%;
  }

  .detail-bar__label {
    flex-grow: 1;
    text-align: center;
  }
`;

export const NavigationBar = ({
  closeRoute,
  goPrevRoute,
  goNextRoute,
  current,
  total,
  text,
}: DetailBarProps) => (
  <Container className="detail-bar">
    <CloseButton className="detail-bar__close" route={closeRoute} />
    <Navigation
      className="detail-bar__navigation"
      goPrevRoute={goPrevRoute}
      goNextRoute={goNextRoute}
      current={current}
      total={total}
    />
    <Label className="detail-bar__label" text={text} isBold={true} />
  </Container>
);
