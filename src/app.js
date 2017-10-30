class IndecisionApp extends React.Component {

  render() {

    const title = "IndecisionApp"
    const subtitle = "Put your hands in the life of a computer."
    const options = ["Thing one", "Thing two", "Thing three"];

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    )
  }
}


class Header extends React.Component{
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component{
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}



class Options extends React.Component{

  handleRemoveAll() {
    alert("remove all");
  }

  render() {
    return (
      <div>
      <button onClick={this.handleRemoveAll}>Remove All</button>
        {
          this.props.options.map(option => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}


class Option extends React.Component {

  render() {
    return (
      <div>
        {
          this.props.optionText
        }
      </div>
    )
  }
}

<p>Hello</p>


class AddOption extends React.Component {

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option){
      alert(option);
    } 
  }
  

  render() {
    return (
      <div>
          <form  onSubmit={this.handleAddOption}>
            <input name="option" type="text"/>
            <button>Add Option</button>
          </form>
      </div>
    )
  }
}




ReactDOM.render(<IndecisionApp />, document.getElementById("root"));
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react