import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import DesktopContainer from '../components/DesktopContainer';

const Main = ({ children }) => (
  <DesktopContainer>
        {children}
  </DesktopContainer>
);

export default Main;
