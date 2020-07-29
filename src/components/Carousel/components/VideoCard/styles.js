import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  -webkit-transition: all .3s ease-in;
  -webkit-transform: scale(1); 
  -ms-transition: all .3s ease-in;
  -ms-transform: scale(1); 
  -moz-transition: all .3s ease-in;
  -moz-transform: scale(1);
  transition: all .3s ease-in;
  transform: scale(1);  

  &:hover,
  &:focus {
    opacity: .5;
    -webkit-transition: all .3s ease-in;
    -webkit-transform: scale(1.1);
    -ms-transition: all .3s ease-in;
    -ms-transform: scale(1.1);   
    -moz-transition: all .3s ease-in;
    -moz-transform: scale(1.1);
    transition: all .3s ease-in;
    transform: scale(1.1);
    z-index: 100;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
