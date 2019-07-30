import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid';
import Saved from '../Components/Saved'

  const SavedContainer = (props) => {

    return (
      <Fragment>
        <div className="saved">
          <Grid container  direction="column" justify="center" alignItems="center">
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
