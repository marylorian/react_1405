import React from 'react'
import './App.css';
import Child from "../Child/Child";

// Правила отрисовки VDOM
//
// 1.<img> => <div> - перерисуем эту вершину и все, что дальше
// 2. <img src={x}> => <img src={y}> - поменяем только атрибут
// 3. <Child a={a} /> => <Child a={b} /> - componentDidUpdate()
/* 4.
<span>1</span>
<span>2</span>
<span>a</span> - добавили, перерисуем весь список
<span>3</span>
<span>4</span>
*/
/*
<span key={1}>1</span>
<span key={2}>2</span>
<span key={a}>a</span> - добавили, нарисуем только эту вершину
<span key={3}>3</span>
*/

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <h1 className="app__title">React App - Virtual DOM, styles/inline styles, UI library</h1>
                <Child className="app__child">
                    <span>I am in Child component</span>
                </Child>
            </div>
        );
    }
}

export default App;
