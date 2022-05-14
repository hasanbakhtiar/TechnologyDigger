import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss';
import myImg from './img/custom.jpg';

class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello</h1>
                <img width="300" src={myImg} />
            </div>
        )
    }
}

ReactDOM.render(<App />,document.querySelector('#root'));