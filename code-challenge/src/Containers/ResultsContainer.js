import React, { Fragment } from 'react'
import Result from '../Components/Result'
import Grid from '@material-ui/core/Grid';

  const ResultsContainer = (props) => {

    return (
      <Fragment>
        <div className="results">
          <Grid container  direction="column" justify="center" alignItems="center">
              {
                props.results.map(result => {
                  return <Result
                  key={result.id}
                  result={result}
                  handleSave={props.handleSave}
                  />
                })

              }
          </Grid>
        </div>
      </Fragment>
    )
  }

export default ResultsContainer;
