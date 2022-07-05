const Main = () => {
  return (
    <React.Fragment>
      <div className="header-container">Header</div>
      <div className="nav-container">Nav Bar</div>
      <div className="main-container">
        <div className="menu-container">Menu Bar</div>
        <div className='content-container'>Content</div>
      </div>
    </React.Fragment>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));

// // Obtain the root
//     const rootElement = document.getElementById('root')
// // Create a ES6 class component
//     class ShoppingList extends React.Component {
// // Use the render function to return JSX component
//     render() {
//         return (
//         <div className="shopping-list">
//         <h1>Shopping List for {this.props.name}</h1>
//           <ul>
//             <li>Instagram</li>
//             <li>WhatsApp</li>
//             <li>Oculus</li>
//           </ul>
//         </div>
//       );
//       }
//     }
// // Create a function to wrap up your component
// function App(){
//   return(
//   <div>
//     <ShoppingList name="@luispagarcia on Dev.to!"/>
//   </div>
//   )
// }

// // Use the ReactDOM.render to show your component on the browser
//     ReactDOM.render(
//       <App />,
//       rootElement
//     )
