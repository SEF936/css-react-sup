import React from 'react';
import styled from '@emotion/styled';



const Button = props => (
  <ButtonContainer
    onPress={() => alert('You are using Emotion-JS!')}
    backgroundColor={props.backgroundColor}
  >
    <ButtonText textColor={props.textColor}>{props.text}</ButtonText>
  </ButtonContainer>
);

export default Button;

const ButtonContainer = styled.TouchableOpacity`
  margin: 15px;
    width: 100px;
    height: 40px
    padding: 12px;
    border-radius: 10px;    
    background-color: black;
`;

const ButtonText = styled.text`
  font-size: 15px;
  color: ${props => props.textColor};
  text-align: center;
`;