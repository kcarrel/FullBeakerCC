import React, { Component } from 'react'
import Search from './Containers/Search'
import ResultsContainer from './Containers/ResultsContainer'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      keyword: '',
      results: [],
      saved: []
    }
  }

  handleChange = (ev) => {
    this.setState({[ev.target.name]: ev.target.value})
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    fetch(`https://pixabay.com/api/?key=13136421-266c28a6d61717bc2e4e6a83e&q=${this.state.keyword}&image_type=photo&category=${this.state.category}`)
    .then(response => response.json())
    .then( result => {
      this.setState({
        results: result.hits
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Search
          keyword={this.state.keyword}
          category={this.state.category}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          />
        <ResultsContainer
          results={this.state.results}/>
      </div>
    );
  }
}

export default App;
