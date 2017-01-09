import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  perspective: 1000px;
  width: ${props => props.width}
  height: ${props => props.height}  
`;

const Flipper = styled.div`
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
  &:hover {
    transform: rotateY(180deg);
  } 
`;

const Tile = styled.div`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => props.width}
  height: ${props => props.height}  
`;

const Front = styled(Tile) `
  z-index: 2;
    /* for firefox 31 */
  transform: rotateY(0deg);
`;

const Back = styled(Tile) `
  transform: rotateY(180deg);
`;

const FlipContainer = ({ height, width, children }) => (
  <Container height={height} width={width}>
    <Flipper>
      <Front height={height} width={width}>
        {children[0]}
      </Front>
      <Back height={height} width={width}>
        {children[1]}
      </Back>
    </Flipper>
  </Container>
);

FlipContainer.propTypes = {
  children: PropTypes.array.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default FlipContainer;

