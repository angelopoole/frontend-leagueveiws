import React from 'react'
import anime from 'animejs'
export default class Form extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }

    handleChangeState = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log(this.state.password, this.state.username)
    }


    // Focus handlers for svg animation {

    userNameFocusHandler = (e) => {
        if (this.current) this.current.pause();
        this.current = anime({
            targets: 'path',
            strokeDashoffset: {
                value: 0,
                duration: 700,
                easing: 'easeOutQuart'
            },
            strokeDasharray: {
                value: '240 1386',
                duration: 700,
                easing: 'easeOutQuart'
            }
        });
    }

    passwordFocusHandler = (e) => {
        if (this.current) this.current.pause();
        this.current = anime({
            targets: 'path',
            strokeDashoffset: {
                value: -336,
                duration: 700,
                easing: 'easeOutQuart'
            },
            strokeDasharray: {
                value: '240 1386',
                duration: 700,
                easing: 'easeOutQuart'
            }
        });
    }

    submitFocusHandler = (e) => {
        if (this.current) this.current.pause();
        this.current = anime({
            targets: 'path',
            strokeDashoffset: {
                value: -730,
                duration: 700,
                easing: 'easeOutQuart'
            },
            strokeDasharray: {
                value: '530 1386',
                duration: 700,
                easing: 'easeOutQuart'
            }
        });
    }
    // end of focus handlers for svg animations }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state.password)
        // console.log(e)
        this.props.handleRegisterSubmit ? console.log("yes") : console.log("no")
        this.props.handleRegisterSubmit ? this.props.handleRegisterSubmit(this.state) : this.props.handleLoginSubmit(this.state)

    }

render() {
    return (
        <div>
            <div className="container">
                    <div className="left">
                        <div className="login">{this.props.login ? "Login" : "Register"}</div>
                        <div className="eula">By {this.props.login? "logging in": "registering"} you agree to the ridiculously long terms that you didn't bother to read</div>
                    </div>
                    <div className='right'>
                        <svg viewBox="0 0 320 300">
                            <defs>
                                <linearGradient
                                    inkscapecollect="always"
                                    id="linearGradient"
                                    x1="13"
                                    y1="193.49992"
                                    x2="307"
                                    y2="193.49992"
                                    gradientUnits="userSpaceOnUse">
                                    <stop
                                        style={{ 'stopColor': '#ff00ff' }}
                                        offset="0"
                                        id="stop876" />
                                    <stop
                                        style={{ 'stopColor': '#ff0000' }}
                                        offset="1"
                                        id="stop878" />
                                </linearGradient>
                            </defs>
                            <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
                        </svg>
                        <form className="form" onSubmit={this.handleSubmit} >
                            <label>username</label>
                            <input name="username" type="username" autoComplete='off' onFocus={(e) => this.userNameFocusHandler(e)} onChange={this.handleChangeState} value={this.username} id="username" />
                            <label>Password</label>
                            <input name="password" type="password" onFocus={(e) => this.passwordFocusHandler(e)} onChange={this.handleChangeState} value={this.password} id="password" />
                            <input type="submit" onFocus={(e) => this.submitFocusHandler(e)} id="submit" value="Submit" />
                        </form>
                    </div >

                </div>
        </div>
    )
}


}