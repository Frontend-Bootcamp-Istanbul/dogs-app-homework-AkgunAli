import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";
import {Switch, Route} from "react-router-dom";
import routes from "./routes";
import Homepage from "./containers/Homepage";
import FilteredDogs from "./containers/FilteredDogs";
import Detaildogs from "./containers/Detaildogs";
import {  Container } from 'reactstrap';


class App extends React.Component{
    render(){
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path='/hakkinda' exact component={() =>
                         <div>

                        <Container> 

                <h2 style = {{textAlign : "center"}}> Kodluyoruz</h2>

                Türkiye’de dünya çapında yazılımcılar yetiştirmek için çalışan, ülkemizi bir teknoloji geliştirme merkezi yapmayı hedefleyen bir sosyal girişim.

                Vizyonumuz, Türkiye’yi teknolojide dünya çapında bir yetenek merkezi haline getirmek, bunu yaparken de gençleri Endüstri 4.0’a ve daha iyi bir dünya hayaline en doğru şekilde hazırlamak.

                </Container>


                        </div>} />
                    <Route path="/tur/:yazilanTur" exact component={FilteredDogs} />
                    <Route path="/detail/:secilenTur" exact component={Detaildogs} />

                    <Route component={() => <div><h1>404 sayfa bulununamadi</h1></div>} />
                    {/*{*/}
                    {/*    routes.map((route) => {*/}
                    {/*        // <Route {...route} />*/}
                    {/*        return <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />*/}
                    {/*    })*/}
                    {/*}*/}
                </Switch>
            </div>
        );
    }
}

export default App;
