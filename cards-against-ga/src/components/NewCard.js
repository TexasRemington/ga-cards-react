import React, { Component } from 'react';

class NewCard extends Component {
  constructor(){
     super();
     this.state = {
       cards: ["hello"]
     }
     this._addCard = this._addCard.bind(this);
   }
   _addCard(newCard){
     let currentCards = this.state.cards;
     currentCards.push(newCard);
     this.setState({cards: currentCards});
   }
  render(){
    return(
      <div>
        <section className="container-fluid">
          <CardForm addCard={ this._addCard } />
        </section>
      </div>
    )
  }
}
export default NewCard;


class CardForm extends Component{
  _handleSubmit(e){
    e.preventDefault();
    let newCard = this.refs.newCardText.value;
    this.props.addCard(newCard);
    this.refs.newCardText.value = '';
    console.log(newCard);
  }
  render(){
    return(
      <form onSubmit={ this._handleSubmit.bind(this) }>
        <input type="text" ref="newCardText" />
        <input type="submit" value="Add New Card" />
      </form>
    );
  }
}


//   _addJoke(newJoke){
//     let currentJokes = this.state.jokes;
//     currentJokes.push(newJoke);
//     this.setState({jokes: currentJokes});
//   }
//   render(){
//     return(
//       <div>
//         <JokeForm addJoke={ this._addJoke }/>
//         <JokeList jokes={this.state.jokes} />
//       </div>
//     );
//   }
// }
//
// <section class="container-fluid">
//   <div class="row">
//     <form name="add-card" id="add-card">
//       <input type="text" name="question" id="question" placeholder="What's your question?">
//     </form>
//     <br>
//     <div class="card">
//       <h4 class="card-title">A preview appears here as you type...</h4>
//       <h6>Cards Against Assembly</h6>
//     </div>
//   </div>
// </section>
