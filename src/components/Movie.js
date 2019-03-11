import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Movie = (props) => {
    return (
        <div>
            { props.movie ? (
                <Card>
                    <CardMedia
                        style={{height: 0, paddingTop: '56.25%', backgroundPosition: 'top'}}
                        image={props.movie.fields.image.fields.file.url}
                        title={props.movie.fields.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {props.movie.fields.title}
                        </Typography>
                        <Typography component="p">
                            {props.movie.fields.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href={props.movie.fields.url} target="_blank">
                            Ver Trailer
                        </Button>
                    </CardActions>
                </Card>
            ) : null }
        </div>
    )
}

export default Movie