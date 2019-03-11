import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import * as contentful from 'contentful'
import Movie from '../components/Movie'

//Contentful info
const SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID
const ACCESS_TOKEN = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})

class MovieList extends Component {
    state = {
        movie: [],
        searchString: ''
    }

    constructor() {
        super()
        this.getMovies()
    }

    getMovies = () => {
        client.getEntries({
            content_type: 'movie',
            query: this.state.searchString
        })
        .then((response) => {
            this.setState({ movies: response.items })
        })
        .catch((error) => {
            console.log("Ocorreu um erro...")
            console.log(error)
        })
    }

    onSearchInputChange = (event) => {
        if (event.target.value) {
            this.setState({ searchString: event.target.value })
        } else {
            this.setState({ searchString: '' })
        }
        this.getMovies()
    }

    render() {
        return (
            <div>
                {this.state.movies ? (
                    <div>
                        <TextField
                            style={{margin: 24}}
                            id="searchInput"
                            placeholder="Insira o nome do filme..."
                            margin="normal"
                            onChange={this.onSearchInputChange}  
                            variant="outlined"                      
                            label="Pesquisar"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Search />
                                    </InputAdornment>
                                ),
                            }}
                        />                        
                        <Grid container>
                            { this.state.movies.map(currentMovie => (
                                <Grid spacing={24} style={{padding: 24}} item xs={12} sm={6} lg={4} xl={3}>
                                    <Movie movie={currentMovie} />
                                </Grid>
                            )) }
                        </Grid>
                    </div>
                ) : "Nenhum filme foi encontrado!"}
            </div>
        )
    }
}

export default MovieList