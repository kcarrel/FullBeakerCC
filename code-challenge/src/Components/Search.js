import React, { Component } from 'react'
import Result from './Result.js'
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';


class Search extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      keyword: '',
      warning: false,
      results: []
    }
  }

  handleChange = (ev) => {
    this.setState({[ev.target.name]: ev.target.value})
  }

  handleSubmit = (ev) => {

    // if (this.state.category === '' || this.state.keyword === '') {
    //   this.setState({
    //     warning: true
    //   })
    // }
    ev.preventDefault()
    fetch(`https://pixabay.com/api/?key=13136421-266c28a6d61717bc2e4e6a83e&q=${this.state.keyword}&image_type=photo&category=${this.state.category}`)
    .then(response => response.json())
    .then( result => {
      this.setState({
        results: result.hits
      })
    })
  }

  // maybe for error popup
  // { this.state.warning ? (
  //   <SnackbarContent message="warning" />
  // ) : ( null )}
  render() {
    return (
      <main>
        <Paper>
          <form className="search">
            <FormControl >
              <TextField
                id="outlined-keyword-input"
                label="Keyword..."
                type="keyword"
                name="keyword"
                autoComplete="keyword"
                margin="normal"
                value={this.state.keyword}
                onChange={this.handleChange}
                variant="outlined"
                />

                <TextField
                  id="category"
                  select
                  variant="outlined"
                  label="Category..."
                  name="category"
                  margin="normal"
                  value={this.state.category}
                  onChange={this.handleChange}
                  >
                  <MenuItem key='fashion' value='fashion'>
                    Fashion
                  </MenuItem>
                  <MenuItem key='nature' value='nature'>
                    Nature
                  </MenuItem>
                  <MenuItem key='backgrounds' value='backgrounds'>
                    Backgrounds
                  </MenuItem>
                  <MenuItem key='science' value='science'>
                    Science
                  </MenuItem>
                  <MenuItem key='education' value='education'>
                    Education
                  </MenuItem>
                  <MenuItem key='people' value='people'>
                    People
                  </MenuItem>
                  <MenuItem key='feelings' value='feelings'>
                    Feelings
                  </MenuItem>
                  <MenuItem key='religion' value='religion'>
                    Religion
                  </MenuItem>
                  <MenuItem key='health' value='health'>
                    Health
                  </MenuItem>
                  <MenuItem key='places' value='places'>
                    Places
                  </MenuItem>
                  <MenuItem key='animals' value='animals'>
                    Animals
                  </MenuItem>
                  <MenuItem key='industry' value='industry'>
                    Industry
                  </MenuItem>
                  <MenuItem key='food' value='food'>
                    Food
                  </MenuItem>
                  <MenuItem key='computer' value='computer'>
                    Computer
                  </MenuItem>
                  <MenuItem key='sports' value='sports'>
                    Sports
                  </MenuItem>
                  <MenuItem key='transportation' value='transportation'>
                    Transportation
                  </MenuItem>
                  <MenuItem key='travel' value='travel'>
                    Travel
                  </MenuItem>
                  <MenuItem key='buildings' value='buildings'>
                    Buildings
                  </MenuItem>
                  <MenuItem key='business' value='business'>
                    Business
                  </MenuItem>
                  <MenuItem key='music' value='music'>
                    Music
                  </MenuItem>
                </TextField>
                <Button
                  type="submit"
                  onClick={this.handleSubmit}
                  sizeLarge
                  color="primary"
                  variant="contained"
                  >
                  Generate
                </Button>
            </FormControl>
          </form>
        </Paper>

      </main>
    )
  }
}

export default Search;
