import React from 'react';
import dogs from "../dogsdata";

import {
    Card, CardImg, CardText, CardBody,CardLink,
    CardTitle, CardSubtitle, Button, Form, Container
  } from 'reactstrap';

  import {Alert} from 'reactstrap';
  import { ListGroup, ListGroupItem } from 'reactstrap';

const DetailsDog = (props) => {

    const secilenTur = props.match.params.secilenTur;
    const filteredDogs = dogs.filter((dog) => dog.id === secilenTur);

    
    return (
        
        <div>

                    {

                        filteredDogs.map((dog) => {
                            return  <div> 

                        <Container> 



                    <Card style={{ height:"600px", textAlign:"center"}}>
                                    <ListGroup>
                                    <ListGroupItem  tag="button" action> 
                              <Alert color="danger">

                              <h1> Seçilen Tür :  {dog.name} </h1>      </Alert>
                                <br/>
                                <img  width="50%" src={dog.image} alt="Card image cap" />

                                <h6> 
                                                               {dog.description}
-
                                <br/>
                                {dog.age}
                                <br/>
                                {dog.published_at}
                                <br/>
                                {dog.breed}
                                <br/>
                                {dog.id}
                                <br/>
                                {dog.name}

                                </h6>
                                
                                </ListGroupItem>

                                </ListGroup>

                                
                                      </Card>
                                      </Container>
                                      </div>
                                      

  })
                    }
        </div>
        
    );
};


export default DetailsDog;