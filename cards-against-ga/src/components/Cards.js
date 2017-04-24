import React, { Component } from 'react';
import Card from "./Card";

class Cards extends Component{
  render(){
    const cards = this.props.cards.map(card => {
      return(
        <Card key={ card.key } keyParam={ card.key } title={ card.title } />
      )
    });
    return(
      <ul className="cards container-fluid">
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-4">
            { cards }
          </div>
        </div>
      </ul>
    );
  }
}

export default Cards;
