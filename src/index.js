import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// const tasks = ['mow the lawn', 'take out the trash', 'shovel the snow'];
// const element = 
//     <div>
//         <ol>
//             {tasks.map((task, index) => <li key = {index}>{task}</li>)}
//         </ol>
//     </div>

class List extends Component {
    render() {
        return (
            <ol>
                {this.props.tasks.map((task, index) => <li key = {index}>{task}</li>)}
            </ol>
        )
    }
}

class Title extends Component {
    render() {
        return <h1>{this.props.title}</h1>
    }
}

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

ReactDOM.render(<Main/>, document.getElementById('root'));




















// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
