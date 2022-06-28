import React from 'react';
import './test.css';


class Main extends React.Component{
    componentWillMount(){
        console.log()
    }
    render(){
        console.log('di render kedua')
        return(
            <div>
                hello
            </div>
        )
    }
    componentDidMount(){
        console.log('di render ketiga')
    }
}

export default Main;