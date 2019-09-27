import React from 'react';
import ReactDOM from 'react-dom';

const elem = ""
const tasks = ['mow the lawn', 'take out the trash', 'shovel the snow'];
const element = React.createElement('ol', null, 
    tasks.map((task, index) => React.createElement('li', { key: index}, task))
);

ReactDOM.render(element, document.getElementById('root'));




















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
