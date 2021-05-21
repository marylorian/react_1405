// Decorator

const sum = (a, b) => a + b

const withLogger = func => {
    return (...args) => {
        console.log('called func', { ...args })
        func(args)
    }
}

const sumWithLogger = withLogger(sum)

sumWithLogger(1, 2) // 3

// HOC = Higher Order Component

const Button = (props) => {
    const { className = "red" } = props

    return <button className={className}>
        {props.label}
    </button>
}

const withGreenClassName = (Component) => {
    return (...props) => {
        return <Component {...props} className="green" />
    }
}

const GreenButton = withGreenClassName(Button)

function example () {
    return <>
        <GreenButton label="I am Green" />
        <Button label="I am Red" />
    </>
}

