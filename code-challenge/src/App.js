import React, { Component } from 'react'
import Search from './Containers/Search'
import SavedContainer from './Containers/SavedContainer'
import ResultsContainer from './Containers/ResultsContainer'
import Grid from '@material-ui/core/Grid';
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
    this.handleSave = this.handleSave.bind(this)
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

  handleSave = (ev, save) => {
    ev.preventDefault()
    this.state.saved.push(save)
    this.setState({
      saved: this.state.saved
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
        <Grid container spacing={3}>

          <Grid item xs={12} sm={6}>
            <ResultsContainer
              results={this.state.results}
              handleSave={this.handleSave}/>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            >
            <SavedContainer
              saved={this.state.saved}
              />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
