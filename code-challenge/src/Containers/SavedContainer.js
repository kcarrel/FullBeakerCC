import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid';
import Saved from '../Components/Saved'

  const SavedContainer = (props) => {

    return (
      <Fragment>
        <div className="saved">
          { props.saved.length > 0 ? <h1>Saved</h1>  : null }
          <Grid container  direction="column" justify="left" alignItems="left">
            {
              props.saved.map(save => {
                return <Saved
                key={save.id}
                save={save} />
              })

            }
          </Grid>
        </div>
      </Fragment>
    )
  }

export default SavedContainer;
