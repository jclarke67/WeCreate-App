import React, {Component} from 'react'
import List from '../../playground/List'
import Title from './Title'

class Main extends Component {
    render() {
        return (
        <div>
            <Title title = {'To-Do List'}/>
            <List tasks = {['Write to alum', 'Plan schedule', 'Go to gym']}/>
            <List tasks = {['Make 2 week plan', 'Read bible']}/>
        </div>
        )
    }
}

export default Main