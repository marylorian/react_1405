import React from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {changeName} from "../../actions/profile";

export const ProfileFunctionComponent = (props) => {
    const profile = useSelector(globalState => globalState.profile)
    const dispatch = useDispatch()

    const handleChangeName = React.useCallback(() => {
        dispatch(changeName("Robert"))
    }, [dispatch])

    return <div className="child__bordered">
        <span>Profile function component</span>

        <p>Age: {profile.age}</p>
        <p>Name: {profile.name}</p>

        <button className="app__button" onClick={handleChangeName}>
            Изменить имя
        </button>
    </div>
}

class ProfileClassComponent extends React.Component {
    handleChangeName = () => {
        const { changeName } = this.props

        changeName('Kate')
    }

    render() {
        const { profile } = this.props

        return <div className="child__bordered">
            <span>Profile class component</span>

            <p>Age: {profile.age}</p>
            <p>Name: {profile.name}</p>

            <button className="app__button" onClick={this.handleChangeName}>
                Изменить имя
            </button>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

const mapDispatchToProps = {
    changeName
}

// as a function
// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeName: newName => dispatch(changeName(newName))
//     }
// }

export const ProfileClassComponentConnected = connect(mapStateToProps, mapDispatchToProps)(ProfileClassComponent)

