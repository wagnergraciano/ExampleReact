import React, { Component } from "react";

class Counter extends Component {
  // JSX, renderedizar listas, renderização condicional, tratar eventos, atualizar estado

  /* 
  // Foi refatorado para torna-lo apenas um componente controlador, 
  // ou seja não possuirá mais estados, e será tratado no componente pai,
  // tendo assim seus argumentos passados por props
  state = {
  value: this.props.counter.value
  tags: ["tag1", "tag2", "tag3"]
  imageUrl: "https://picsum.photos/200"
  };

  //Renderizar listas
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  //Ou usa isso ou "=>"
  constructor() {
    super();
    this.handleIncriment = this.handleIncriment.bind(this);
  }

  //Refatorado para componente controlador
  handleIncriment = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };
  */

  render() {
    return (
      // Também poderia usar React.Fragment
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* Para passar um argumento(parametro) para o Handle se faz daquela maneira */}
        <button
          // onClick={() => this.handleIncriment({ id: 1 })}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/*renderizar listas {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
