import React from "react"
import  'semantic-ui-css/semantic.min.css';
import { Card, Image } from 'semantic-ui-react'
import styled from 'styled-components';

const CardOne = styled.div`
.ui.card{
    background-color:red;
    width:25%;
}
`;

const StarWarsCard = (props) => {
    return (
<CardOne>
    <Card >
      <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{props.birthYear}</span>
        </Card.Meta>
        <Card.Description>
         {props.homeworld}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
</CardOne>
    )
  }
  
  export default StarWarsCard