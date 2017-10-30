  let visibility = false;


const toggleVisibility = () => {
  visibility = !visibility;
  render();
 }

const render = () => {
  var template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide Details' : "Show Details"}
      </button>
      {visibility &&(
        <div>
          <p>This is some text</p>
        </div>)}
    </div> 
  )


  ReactDOM.render(template, document.getElementById("root"));
}

render();