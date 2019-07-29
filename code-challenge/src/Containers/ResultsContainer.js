import React, { Fragment } from 'react'
import Result from '../Components/Result'
import Grid from '@material-ui/core/Grid';

  const ResultsContainer = (props) => {

    return (
      <Fragment>
        <div className="results">
          <Grid container spacing={2}>
              {
                props.results.map(result => {
                  return <Result result={result} />
                })

              }
          </Grid>
        </div>
      </Fragment>
    )
  }

export default ResultsContainer;
