import React from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/StarRounded';
import ThumbIcon from '@material-ui/icons/ThumbUpRounded';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { pink, orange } from '@material-ui/core/colors';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import withStyles from '@material-ui/core/styles/withStyles';

const buttonTheme = createMuiTheme({
  palette: {
    secondary: orange,
    primary: pink
  }
 })



  const Result = (props) => {



    let tags = props.result.tags.split(",")

    return (
      <Card style={{width: 400, height:150, display: "center", margin: 5, padding: 20}} className="result">
        <Grid container
          direction="column"
          justify="center"
          alignItems="center">
        <Grid item
          xs={6}>
          <CardMedia
            className="resultIMG"
            component="img"
            alt=""
            src={props.result.previewURL}
            id="picture"
            />
          { props.savedId.includes(props.result.id) ?  (
              <Button
                  sizeLarge
                  color="secondary"
                  className="save"
                  variant="contained"

                  >
                  Saved
              </Button>
          ) : (
            <ThemeProvider theme={buttonTheme}>
            <Button
                type="submit"
                className="save"
                color="primary"
                value={props.result.pageURL}
                variant="contained"
                onClick={(ev) => props.handleSave(ev, props.result)}
                >
                Save
            </Button>
          </ThemeProvider>

            )}
          </Grid>

          <Grid container
            direction="column"
            alignItems="center"
            height="200px"
            width="100px"
            style={{marginLeft: 10}}
            xs={6}
          >
          <Grid item
            >
            { tags.map(tag => {
              return  <Chip
                size="small"
                color="primary"
                label={tag}
                style={{ marginBottom: 5, marginRight: 5}}
                />
            })}
            <Grid container
              direction="row"
              alignItems="flex-end"
              style={{ height: 60}}
            >
            <Grid item xs={6}>
              <a fontSize="5px">{props.result.favorites}</a>
              <StarIcon  style={{ fontSize: 15}} />
            </Grid>
            <Grid item xs={6}>

                <a fontSize="5px">{props.result.likes}</a>
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
