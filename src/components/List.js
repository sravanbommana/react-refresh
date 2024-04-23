import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';

const list = [
  {id:1, title: "Cras justo odio"},
  {id:1, title: "Dapibus ac facilisis in"},
  {id:1, title: "Morbi leo risus"},
]
export class List extends Component {
  render() {
    return (
      <ListGroup>
        <Button variant="primary">Test</Button>
        {
          list.map(item => <ListGroup.Item key={item.id}>{item.title}</ListGroup.Item>)
        }
      </ListGroup>
    )
  }
}

export default List
