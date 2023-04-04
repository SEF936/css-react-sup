// Emotion.js

/** @jsx jsx */

import { jsx} from '@emotion/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Avatar } from '@mui/material';
import img from '../assets/Nicolas1.png'


const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px;
  background: #df4848;
  border: 1px solid #1890ff;
`;

const Component = styled("card")`
.card {
 background: #bde2e4;
  height: 350px;
  width: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  border-radius: 5px
};

.button {
  display: flex;
  gap: 1rem;
}`
const Title = styled.h1`
  color: black;
  font-weight: 400;
  margin:0;
  margin-bottom:1rem;
  `
;
const Paragraph = styled.p`
  color: red;
  margin:0;
  margin-bottom:1rem;

`;

const Button = styled.button`
background: #f5bbbe;
height: 3rem;
width:5rem;
border: none;
border-radius:5px;
color:grey;
`;

const Emotion = () => (


  <div css={containerStyle}>
    <Component>
      <div className='card'>
        <Avatar alt="Remy Sharp" src={img} sx={{ width: 120, height: 120 }}/>
        <Title>Nicolas Lopes</Title>
        <Paragraph>J'aime le sport et les voyages</Paragraph>

        <div className='button'>
          <Button>Show Pictures</Button>
          <Button>Show Description</Button>
          <Button>Show More</Button>
        </div>
      </div>   
    </Component>
    
   
  </div>
  )
;

export default Emotion;