import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';


class Search extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      keyword: ''
    }
  }

  handleChange= (ev) => {
    this.setState({[ev.target.name]: ev.target.value})
  }


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
