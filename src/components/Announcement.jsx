import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: #25316D;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
`;

const Announcement = () => {
  return (
    <Container>One Step Towards Saving the World</Container>
  )
}

export default Announcement