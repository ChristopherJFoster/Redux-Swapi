import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
// import actions
import { getSWChars } from '../actions';

class CharacterListView extends React.Component {
  componentDidMount() {
    console.log('CDM');
    // call our action
    this.props.getSWChars();
    console.log('CDM: this.props.characters: ', this.props.characters);
    console.log('CDM: this.props.fetching: ', this.props.fetching);
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        <h3>"That's no moon. It's a...loading screen." - Obi-Wan Kenobi</h3>
      );
    }
    console.log('render: this.props.characters: ', this.props.characters);
    console.log('render: this.props.fetching: ', this.props.fetching);
    return (
      <div className='CharactersList_wrapper'>
        <CharacterList
          characters={this.props.characters}
          error={this.props.error}
        />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  characters: state.characters,
  fetching: state.fetching,
  error: state.error
});

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getSWChars
  }
)(CharacterListView);
