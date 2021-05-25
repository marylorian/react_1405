import React from "react";
import TextField from "@material-ui/core/TextField";
import './styles.css'
import { SENDERS } from "../../constants";

const Input = props => {
    const { onAddMessage, formId } = props
    const [inputValue, setInputValue] = React.useState('')

    const inputFormId = React.useMemo(() => {
        return "message-input" + formId
    }, [formId])

    const handleChange = (event) => {
        console.log('Input value changed', { value: event.target.value })

        setInputValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log('on submit', { inputValue })

        if (onAddMessage) {
            onAddMessage({ text: inputValue, sender: SENDERS.ME })
        }

        setInputValue('')
    }

    return (
        <div>
            <form className="input-component" id={inputFormId} onSubmit={handleSubmit}>
                <TextField
                    id="text-field"
                    className="child__text-field"
                    label="Мое текстовое поле"
                    placeholder="Мой плейсхолдер"
                    variant="outlined"
                    value={inputValue}
                    onChange={handleChange}
                />
                <button className="app__button" form={inputFormId}>Отправить</button>
            </form>
        </div>
    )
}

export default Input