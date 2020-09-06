import React from 'react';
import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const Posts = (props) => {
    const {id, title, body} = props.post;
    const classes = useStyles();
    
    
    return (
        <div>
          <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                <h4>Post Id:{id}</h4>
                </Typography>
                <Typography variant="h5" component="h2">
                <h2>Title: {title}</h2>
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                adjective
                </Typography>
                <Typography variant="body2" component="p">
                <p>Description: {body}</p>
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/post/${id}`}>
                    <Button variant="contained" color="primary">Details {id}</Button>
                </Link>
            </CardActions>
          </Card>
        
            
            
        </div>
    );
};

export default Posts;