// /* global describe beforeEach afterEach it */

// import {expect} from 'chai'
// import {me, logout} from './user'
// import axios from 'axios'
// import MockAdapter from 'axios-mock-adapter'
// import configureMockStore from 'redux-mock-store'
// import thunkMiddleware from 'redux-thunk'
// import history from '../history'
// import letters from './letters'

// const middlewares = [thunkMiddleware]
// const mockStore = configureMockStore(middlewares)

// describe('thunk creators', () => {
//   let store
//   let mockAxios

//   const initialState = {bank: letters, selectedLetter: null}

//   beforeEach(() => {
//     mockAxios = new MockAdapter(axios)
//     store = mockStore(initialState)
//   })

//   afterEach(() => {
//     mockAxios.restore()
//     store.clearActions()
//   })

//   //expect that every game starts with a full bank
//   //expect that each player has 7 tiles at all times
//   describe('letter-bank', () => {
//     it('every game starts with a full bank and then gives 7 letters to each player', async () => {
//       // const fakeUser = {email: 'Cody'}
//       // mockAxios.onGet('/auth/me').replyOnce(200, fakeUser)
//       // await store.dispatch(me())
//       // const actions = store.getActions()
//       // expect(actions[0].type).to.be.equal('GET_USER')
//       // expect(actions[0].user).to.be.deep.equal(fakeUser)
//     })
//   })








