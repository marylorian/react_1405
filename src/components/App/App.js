import React from 'react'
import './App.css';

const Child = props => {
    const { counter } = props
    const [childCounter, setChildCounter] = React.useState(0)

    // хук, позволяющий один раз посчитать сложное значение и не пересчитывать его на каждый рендер
    const sqrt = React.useMemo(() => {
        return counter % 2
    }, [counter])

    const childRef = React.useRef(null)

    React.useEffect(() => {
        console.log('Child didMount', { childRef, current: childRef.current })

        const timer = setTimeout(() => {}, 1000)

        return () => {
            console.log('Child willUnmount')

            clearTimeout(timer)
        }
    }, [])

    React.useEffect(() => {
        console.log('Child didUpdate', { childCounter })
    }, [childCounter])

    const onChangeChildCounter = React.useCallback(() => {
        setChildCounter(prevChildCounter => prevChildCounter + 1)
    }, [])

    console.log('Child render')

    // эквивалентные записи
    childRef?.current?.click() // 1.
    if (childRef && childRef.current) { // 2.
        childRef.current.click()
    }

    return (
        <div className="child__bordered" ref={childRef}>
            <span>Counter from props: {counter}</span>
            <span>Counter from state: {childCounter}</span>
            <button className="app__button" onClick={onChangeChildCounter}>Change state</button>
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { counter: 0, showChild: true }

        console.log('constructor')
    }

    componentDidMount() {
        console.log('componentDidMount')

        this.timer = setTimeout(() => {}, 1000)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', { prevState })
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    onButtonClick = () => {
        console.log('clicked!')

        this.setState((prevState) => {
            return { counter: prevState.counter + 1 }
        }, () => {
            console.log('Я изменил state на ', this.state.counter)
        })
    }

    onHideChildClick = () => {
        this.setState({ showChild: false })
    }

    render() {
        console.log('render')

        return (
            <div className="app">
                <h1 className="app__title">React App - state, props, lifecycle methods</h1>

                {this.state.showChild && <Child counter={this.state.counter}/>}

                <button className="app__button" onClick={this.onButtonClick}>My button</button>
                <button className="app__button" onClick={this.onHideChildClick}>Hide Child</button>
            </div>
        );
    }
}

export default App;
