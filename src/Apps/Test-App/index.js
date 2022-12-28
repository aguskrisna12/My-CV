import React from 'react';
import './test.css';


class Main extends React.Component{
    componentWillMount(){
        
    }
    render(){
        console.log('di render kedua')
        return(
            <div className='bg-primary'>
                <div className='bg-success'>
                    heloo
                </div>
            </div>
        )
    }
    componentDidMount(){
        
    }
}

export default Main;