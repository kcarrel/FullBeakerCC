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
      saved: [],
      savedId: []
    }
    this.handleSave = this.handleSave.bind(this)
  }

  handleChange = (ev) => {
    this.setState({[ev.target.name]: ev.target.value})
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    let query = this.state.keyword.replace(/\s+/g,' ').trim()
    fetch(`https://pixabay.com/api/?key=13136421-266c28a6d61717bc2e4e6a83e&q=${query}&image_type=photo&category=${this.state.category}`)
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
    this.state.savedId.push(save.id)
    this.setState({
      saved: this.state.saved,
      savedId: this.state.savedId
    })
  }

  render() {
    return (
      <div className="App">
        <Grid container spacing={3}>
          <Grid item xs={6}>

            <Search
              keyword={this.state.keyword}
              category={this.state.category}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              />

            <ResultsContainer
              savedId={this.state.savedId}
              results={this.state.results}
              handleSave={this.handleSave}
              />
          </Grid>

          <Grid
            item
            xs={6}
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
