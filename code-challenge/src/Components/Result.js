import React from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/StarRounded';
import ThumbIcon from '@material-ui/icons/ThumbUpRounded';
import Grid from '@material-ui/core/Grid';


  const Result = (props) => {
    return (
      <Card style={{width: 300, height:150, display: "center"}} className="result">
        <Grid item>

          <CardMedia
            className="resultIMG"
            component="img"
            alt=""
            src={props.result.previewURL}
            id="picture"
            />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <a>{props.result.favorites}</a>
                
                <StarIcon  style={{ fontSize: 15 }} />
                <a>{props.result.likes}</a>
                <ThumbIcon style={{ fontSize: 10 }} />
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
              </Grid>
          </Grid>
      </Card>
    )
  }

export default Result
