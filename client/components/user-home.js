import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */

 //select an old game
 //start a new game
 //to begin will start with a link to a board component
 //

 const dummyGames = [
   {opponent: 'Angelessa P.',
    score: '24/65',
  },
  {opponent: 'Aaron H.',
   score: null}
 ]

export const UserHome = props => {
  const {email} = props

  return (
    <div className='user-home'>
      <div className='home-headings'>
        <h2>Start A New Game</h2>
      </div>
      <div className='invite'>
        <input/><button>invite!</button>
      </div>
      <div className='home-headings'>
        <h2>Current Games & Invitations</h2>
      </div>
      <div>
        {
          dummyGames.map(game => {
            return (
              <div>
                <p>{game.opponent}</p>
                {game.score ? <p>{game.score}</p> : <button>Accept Challange!</button>}
              </div>
            )
          })
        }
      </div>


    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
