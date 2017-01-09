import React, { PropTypes } from 'react';
import styled from 'styled-components';
import FlipContainer from './FlipContainer';

const dimension = {
  height: '310px;',
  width: '310px;',
};

const Container = styled.div`
`;

const Front = styled.div`
  ${{ ...dimension }}
  background-color: #FFFFFF;
`;

const Back = styled.div`
   ${{ ...dimension }}
   background-color: #00ADEF;
   color: #FFFFFF;
`;

const FrontText = styled.div`
  position: absolute;
  bottom: 0px;
  font-size: 40px;
  padding: 20px;
  color: ${props => props.color}
  font-weight:lighter;
`;

const BackContainer = styled.div`
  padding: 20px;
`;

const BackText = styled.div``;

const BackButton = styled.div`
  height: 40px;
  background-color: #003665;
  margin-top: 20px;
  text-align: center;
  padding-top: 15px;
`;

const CompanyCategoryTile = ({ category, info, color }) => (
  <Container>
    <FlipContainer {...dimension}>
      <Front>
        <FrontText color={color}>{category}</FrontText>
      </Front>
      <Back>
        <BackContainer>
          <BackText>
            {info}
          </BackText>
          <BackButton>
            Go to {category}
          </BackButton>
        </BackContainer>
      </Back>
    </FlipContainer>
  </Container>
);

CompanyCategoryTile.propTypes = {
  category: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default CompanyCategoryTile;
