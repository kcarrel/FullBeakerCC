import React from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/StarRounded';
import ThumbIcon from '@material-ui/icons/ThumbUpRounded';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { pink, orange } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import withStyles from '@material-ui/core/styles/withStyles';

// custom button css rendered based on if the picture is already saved or not
const SaveButton = withStyles(theme => ({
  root: {
    color: '#FFFFFF',
    backgroundColor: pink[700],
    '&:hover': {
      backgroundColor: pink[800],
    },
  },
}))(Button);

const SavedButton = withStyles(theme => ({
  root: {
    color: '#FFFFFF',
    backgroundColor: orange[600],
    '&:hover': {
      backgroundColor: orange[700],
    },
  },
}))(Button);

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#47A28E'
    },
  },
});


  const Result = (props) => {
    // Change props.tags into an array to allow for mapping and returning a Chip item for each tag
    let tags = props.result.tags.split(",")

    return (
      <Card style={{width: 400, height:150, display: "center", margin: 5, padding: 20}} className="result">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          >
          <Grid item
            xs={6}
            >
            <CardMedia
              className="resultIMG"
              component="img"
              alt=""
              src={props.result.previewURL}
              id="picture"
              />
            { props.savedId.includes(props.result.id) ?  (
                <SavedButton
                    sizelarge
                    className="save"
                    variant="contained"
                    >
                    Saved
                </SavedButton>

            ) : (
                <SaveButton
                    type="submit"
                    className="save"
                    color="secondary"
                    value={props.result.pageURL}
                    variant="contained"
                    onClick={(ev) => props.handleSave(ev, props.result)}
                    >
                    Save
                </SaveButton>
                )}
              </Grid>
              <Grid item
                height="200px"
                width="100px"
                style={{marginLeft: 10}}
                xs={6}
                >
                <Grid
                  item
                  >
                  { tags.map(tag => {
                    return <ThemeProvider theme={theme}>
                    <Chip
                      key={tag}
                      size="small"
                      color="secondary"
                      label={tag}
                      style={{ marginBottom: 5, marginRight: 5}}
                      />
                    </ThemeProvider>
                  })
                }
              <Grid
                container
                direction="row"
                alignItems="flex-end"
                style={{ height: 60}}
                >
                <Grid item xs={6}>
                  <p fontSize="5px">{props.result.favorites}</p>
                  <StarIcon  style={{ fontSize: 15}} />
                </Grid>
                <Grid item xs={6}>
                  <p fontSize="5px">{props.result.likes}</p>
                  <ThumbIcon style={{ fontSize: 10 }} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    )
  }

export default Result
