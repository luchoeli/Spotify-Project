import React from 'react';
import { connect } from 'react-redux'
import { searchArtistID} from '../actions/index'
import AlbumContainer from '../components/AlbumContainer';
import Header from '../components/Header'
import Loading from '../components/Loading';
import BreadCrumbs from '../components/BreadCrumbs'

class Artist extends React.Component {

    constructor() {
        super();
        this.state = {
            artistId: ''
        }
    }
    componentDidMount() {
        const artistId = this.props.match.params.id;
       
        this.setState({
            artistId
        }); 

        this.props.searchArtistID(artistId);
        
    }
    

    render() {
        const { error, loading, currentArtist } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        console.log(currentArtist)
       
        const breadcrumb = (
              <BreadCrumbs listItems={ [
                                            {link: "/" , text: "Home", classname: "breadcrumb-item"},
                                            {link: "/artistsearch" , text: "Artist", classname: "breadcrumb-item"},
                                           
                                         ] } />
                                            /*
             <Route>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item "><Link to="/artistsearch">Artist</Link></li>         
                            {currentArtist && <li className="breadcrumb-item active"><Link to="/artist/">{currentArtist.id}</Link></li>}      
                        </ol>
                    </nav>
                </Route>
                */
        );
        
        return (             
            <div className="main_view">
                <Header haveSearchBar={true} />
                <hr />
                { loading ? (
                    <Loading/>
                ) : (
                    currentArtist ? (
                        <div>
                            <div className="shadow p-3 mb-5 bg-white rounded">
                                <div className="media">
                                    <img src={currentArtist.image}  className="align-self-start mr-3" alt="Album Logo"/>
                                    <div className="media-body">
                                        <h3 className="mt-0">{currentArtist.name}</h3>
                                        <p>{currentArtist.genres[0]}</p>
                                    </div>
                                </div>
                            </div>     
                            <hr />
                            {breadcrumb}
                            <hr />
                            <AlbumContainer  artistId={ this.state.artistId }/>
                        </div>
                    ) : (
                            <div>
                                {breadcrumb}
                                <p>artist not found </p>
                            </div>
                        )
                    )
                }
            </div>
        )
        
    }
}


const mapStateToProps = (state) => {
    return {
        currentArtist: state.spotifyReducers.currentArtist,
        error: state.spotifyReducers.error,
        loading: state.spotifyReducers.loading
    }
}
  
  const mapDispatchToProps = dispatch => ({
    searchArtistID: artist => dispatch(searchArtistID(artist))   
  })
  
  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(Artist)