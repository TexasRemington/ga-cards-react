import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';
import firebase from './utils/Firebase';
import Cards from './components/Cards';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.ref = firebase.database().ref();
    this.state= {
      cards: []
    }
  }

  componentDidMount(){
  this.ref.on('value', (snapshot)=>{
    const db = snapshot.val();
    if(db !== null){
      this.setState({
        cards: db.cards
      })
    }
  });
}


persistCards(){
  this.ref.set({
    cards: this.state.cards
  });
}

// addCard(cardName){
//   this.NewCard(cardName, (response) => {
//     let cards = this.state.cards;
//
//     cards.unshift({
//
//       title: cardName,
//       key: Date.now()
//     })
//     this.setState({ cards })
//     this.persistCards();
//   }
//   });
//   }
  // _addCard(cardTitle){
  //   let currentCards = this.state.cards;
  //   currentCards.push(newCardText);
  //   Cards.unshift({
  //     title: cardTitle,
  //     key: Date.now()
  //   })
  //   this.setState({cards: currentCards});
  //   this.persistCards();
  // }

  render() {
    return (
      <div className="App">
        <div className="App-container">
          <header className="navbar">
            <h1 className="pull-left">Cards Against Assembly</h1>
          </header>
          <ul className="tabs">
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="/newcard" activeClassName="active">Add a New Card</Link></li>
            <li><Link to="/about" activeClassName="active">About</Link></li>
          </ul>
        </div>
        <div className="content">
          {this.props.children}
        </div>
        <Cards cards={ this.state.card } />
      </div>
    );
  }
}




export default App;
