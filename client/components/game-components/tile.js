import React, { Component } from 'react'
// import { DragSource } from 'react-dnd'


// const Types = {
//  ITEM: 'tile'
// }

// const itemSource = {
//  beginDrag(props) {
//    return {id: props.id}
//  }
// }


// function collect(connect, monitor) {
//   return {
//     connectDragSource: connect.dragSource(),
//     isDragging: () => {
//       console.log('draggggg')
//       monitor.isDragging()
//     }
//   }
//  }


 class Tile extends Component {
  render() {
  // const { isDragging, connectDragSource, src, letter, id } = this.props
  const {letter} = this.props
  // return connectDragSource(
    return(
    <div className="tile">
        <p>{letter}</p>
      </div>)}
 }


// export default DragSource(Types.ITEM, itemSource, collect)(Tile)
export default Tile

