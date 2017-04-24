import React, { Component } from 'react';

class Card extends Component {
  constructor(){
     super();
     this.state = {
       cards: ["Q: What happens to a frog's car when it breaks down? A: It gets toad away."]
     }
     this._addCard = this._addCard.bind(this);
   }
  render(){
    return(
      <div>

        <div className="card" onClick={ e => this.props.revealCard(this.props.keyParam) }>
          <h4 className="card-title">{ this.props.title }</h4>
          <h6>Cards Against Assembly</h6>
        </div>
      </div>
    )
  }
}
export default Card;
