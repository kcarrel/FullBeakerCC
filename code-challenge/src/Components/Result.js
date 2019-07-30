import React from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/StarRounded';
import ThumbIcon from '@material-ui/icons/ThumbUpRounded';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';


  const Result = (props) => {

    let tags = props.result.tags.split(",")

    return (
      <Card style={{width: 400, height:150, display: "center", margin: 5}} className="result">
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
            <Button
                type="submit"
                sizeLarge
                color="primary"
                value={props.result.pageURL}
                onClick={(ev) => props.handleSave(ev, props.result)}
                >
                Save
            </Button>
          </Grid>

          <Grid container
            direction="column"
            alignItems="center"
            xs={6}
          >
          <Grid item
            >
            { tags.map(tag => {
              return  <Chip
                size="small"
                color="primary"
                label={tag}
                margin="auto"
                />
            })}
            <Grid container
              direction="row"
              alignItems="center"
              xs={6}
            >
              <a>{props.result.favorites}</a>
              <StarIcon  style={{ fontSize: 15}} />


                <a>{props.result.likes}</a>
                <ThumbIcon style={{ fontSize: 10 }} />
                </Grid>

              </Grid>
            </Grid>
        </Grid>
      </Card>
    )
  }

export default Result
