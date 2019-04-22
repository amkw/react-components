var GroceryList = (props) => {

  var onListItemClick = (event) => {
  console.log('I got clicked');
  };

  return (
    <ul>
      <li onClick={onListItemClick}>{props.items[0]}</li>
      <li>{props.items[1]}</li>
    </ul>
  );
  };

var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList items={['Blueberries', 'Bananas']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
