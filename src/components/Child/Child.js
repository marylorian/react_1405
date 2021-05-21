import React from "react";
import classnames from "classnames";
import TextField from "@material-ui/core/TextField";
import './styles.css'

const Child = props => {
    const [inputValue, setInputValue] = React.useState('')

    const handleChange = (event) => {
        console.log('Input value changed', { value: event.target.value })

        setInputValue(event.target.value)
    }

    const handleClickDiv1 = event => {
        console.log('clicked div1')
    }
    const handleClickDiv2 = event => {
        event.stopPropagation() // вызываем, если мы не хотим, чтобы клик по div2 всплывал выше на уровень div1

        console.log('clicked div2', { event })
    }

    const handleClickTrickyLink = event => {
        event.preventDefault() // вызываем, если не хотим, чтобы отработало дефолтное поведение события (в данном случае, переход по ссылке)

        console.log('clicked Tricky Link')
    }

    return (
        <div className={classnames("child__bordered", {
            'input-empty': inputValue.length === 0,
            'input-nonempty': inputValue.length > 0,
        })}>
            {/* Example for stopPropagation */}
            <div className="child__bordered" onClick={handleClickDiv1}>
                div 1
                <div className="child__bordered" onClick={handleClickDiv2}>
                    div 2
                </div>
            </div>

            {/* Example for preventDefault */}
            <a href="/example-url" onClick={handleClickTrickyLink}>Tricky Link!</a>

            {props.children}

            <TextField
                id="text-field"
                style={{ margin: "12px" }} // inline styles
                className="child__text-field" // class for HTML
                label="Мое текстовое поле"
                placeholder="Мой плейсхолдер"
                variant="outlined"
                value={inputValue}
                onChange={handleChange}
            />
        </div>
    )
}

export default Child