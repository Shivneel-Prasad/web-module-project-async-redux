import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './jokes.css'
import { Joker } from '../Actions/jokeActions';

const Clown = ({ Prankster, isFetching, error, dispatch }) => {

  useEffect(() => {
    dispatch(Joker());
  }, []);

  if (error) {
    return <h2>ERROR ALERT: {error}</h2>;
  }
  
  if (isFetching) {
    return <h2>Fetching you some jokes!!</h2>;
  }

  const handleClick = () => {
    dispatch(Joker());
  }
  return (
    <>
        <div className='text' className='container'>
          <h2>{Prankster.category}</h2>
          <h2>Q: {Prankster.setup}</h2>
          <h2>A: {Prankster.delivery}</h2>
        </div>
        <button className='button' onClick={handleClick}>Click Me</button>
    </>
  )
};

const mapStateToProps = state => {
    return {
        Prankster: state.Prankster,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps)(Clown);
