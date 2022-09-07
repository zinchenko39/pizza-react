import React from 'react'
import { useState } from 'react';

function Categories({ items}) {
  const [activeItem, setActiveItem] = useState(null);
  
  const onSelectItem = (index) => {
    setActiveItem(index)
  }

  return (
        <div className="categories">
              <ul>
                <li className= {activeItem === null ? 'active' : ''} onClick={() => setActiveItem(null)}>Все</li>
                {
                  items && items.map((name, index) => (
                    <li 
                    className= {activeItem === index ? 'active' : ''}
                    onClick={() => onSelectItem(index)} 
                    key={`name_${index}`}>{name}
                    </li>
                  ))
                }
              </ul>
            </div>
  )
}

export default Categories;

//Class Component

// class Categories extends React.Component {
//   state = {
//     activeItem: null,
//   }

//   onSelectItem = index => {
//     this.setState({
//       activeItem: index,
//     })
//   }

//   render () {
//     const {items} = this.props;
//     return (
//       <div className="categories">
//             <ul>
//               <li className="">Все</li>
//               {
//                 items.map((name, index) => (
//                   <li className= {this.state.activeItem === index ? 'active' : ''} 
//                   onClick={() => this.onSelectItem(index)} 
//                   key={`name_${index}`}>{name}</li>
//                 ))
//               }
//             </ul>
//           </div>
//     )
//   }
// }