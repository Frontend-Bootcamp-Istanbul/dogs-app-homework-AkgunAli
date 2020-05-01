import React from 'react';
import dogs from "../dogsdata";
import {Button} from "reactstrap";
import FavoriteActions from "../components/FavoriteActions";
import Dog from "../components/Dog";
import axios from "axios";
import { Spinner } from 'reactstrap';


const apiHost = "https://5ea568b02d86f00016b45c16.mockapi.io";

class Homepage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            favorites: [],
            buttonestatus : false,
            loadingFavorites: false
        }
    }
    componentDidMount() {
        // localstoragedan getirme
/*        this.setState({
            favorites: window.localStorage.getItem("favorites") ? JSON.parse(window.localStorage.getItem("favorites")): []
        })*/

        this.setState({

            loadingFavorites: true

        }, () => {
            axios.get(`${apiHost}/favorites`).then((result) => {
                this.setState({
                    favorites: result.data,
                    loadingFavorites: false,

                })
            }).catch((err) => {
                console.log("Axios err", err);
                this.setState(({
                    loadingFavorites: false
                }))
            })
        })
    }

    toggle = (dogId)=>{
        this.setState ({buttonestatus: true});


        const foundDog = this.state.favorites.find((favorite) => favorite.dogId === dogId);
        if(foundDog){
            axios.delete(`${apiHost}/favorites/${foundDog.id}`).then((result) => {
                this.setState(({
                    favorites: this.state.favorites.filter((dog) => dog.dogId !== dogId) ,
                    buttonestatus : false
                        

                }))
            }).catch((err) => {
                console.log(err);

            });
        }else{
            // window.localStorage.setItem("favorites", JSON.stringify(this.state.favorites));
            axios.post(`${apiHost}/favorites`, {
                dogId
            }).then((result) => {
                const eklenenFavori = result.data; // {id: 1, dogId: benim yolladigim dog id, createdat: date}
                this.setState({
                    favorites: [...this.state.favorites, eklenenFavori] ,
                    buttonestatus : false


                })
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    getStatus= (dogId) =>{
        const foundDog = this.state.favorites.find((favorite) => favorite.dogId === dogId);
        return foundDog;
    }

    render(){
        if(this.state.loadingFavorites){
            return <div>
                <h1 style={{  textAlign:"center"}}>
                    ....Sayfa Yukleniyor..... <br/>
                      <Spinner color="info" />
                </h1>
                

            </div>
        }
        return (
            <div>
                <ul>
                    {
                        dogs.map((dog) => {
                            return <Dog toggle={this.toggle} buttonestatus={this.state.buttonestatus} id={dog.id} getStatus={this.getStatus} {...dog}/>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Homepage;