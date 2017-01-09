import React from 'react';
import styled from 'styled-components';
import MainLayout from '../layouts/MainLayout';
import CompanyCategoryTile from '../components/CompanyCategoryTile';

const Companies = styled.ul`
   background-color: gray;
   list-style: none;
   display : inline-block;
`;

const companies = [
  {
    category: 'Debt Capital Markets',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod ex tristique porta facilisis. Nulla leo mauris, pretium a pulvinar eu, efficitur sed ipsum. Nulla placerat mauris sit amet justo vehicula volutpat. Cras ut placerat magna. Morbi dignissim porta nibh, eget sodales ex elementum at. Donec at nunc a orci luctus lacinia.',
    color: '#C2C3C5',
  },
  {
    category: 'Debt Capital Markets2',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod ex tristique porta facilisis. Nulla leo mauris, pretium a pulvinar eu, efficitur sed ipsum. Nulla placerat mauris sit amet justo vehicula volutpat. Cras ut placerat magna. Morbi dignissim porta nibh, eget sodales ex elementum at. Donec at nunc a orci luctus lacinia.',
    color: '#27B8A6',
  },
  {
    category: 'Debt Capital Markets3',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod ex tristique porta facilisis. Nulla leo mauris, pretium a pulvinar eu, efficitur sed ipsum. Nulla placerat mauris sit amet justo vehicula volutpat. Cras ut placerat magna. Morbi dignissim porta nibh, eget sodales ex elementum at. Donec at nunc a orci luctus lacinia.',
    color: '#30BCF2',
  },
];

const CompanyCategoryTileContainer = styled.li`
  display : inline-block;
  margin: 20px;
`;

export default () => (
  <MainLayout>
    <Companies>
      {companies.map(company => (
        <CompanyCategoryTileContainer key={company.category}>
          <CompanyCategoryTile {...company} />
        </CompanyCategoryTileContainer>
      ))}
    </Companies>
  </MainLayout>
);
