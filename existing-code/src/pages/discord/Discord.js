import React, {useEffect, useState} from 'react';
import './discord.scss';
import {NavLink} from "react-router-dom";
import {get_discord, get_discord_error} from "Store/discord/actions";
import {connect} from "react-redux";
import logo from 'Images/zerOtheorem_logo.svg';
import WithApiService from "Components/hoc/WithApiService";
import {ReactSVG} from "react-svg";

const Discord = (props) => {
    const [reg, setReg] = useState(false);

    const {api, get_discord, get_discord_error, data} = props;

    useEffect(() => {
        api.getDiscord()
            .then(data => get_discord(data))
            .catch(error => get_discord_error(error));
    }, [])

    return (
        <section className="section hero inner-page discord">
            <div className="col-lg-12 d-flex align-items-center justify-content-center vh-100">
                {reg ? <div className="form col-lg-4 d-flex align-items-center p-3 flex-column">
                        <div className="h4 mb-3">Create an account</div>
                        <label className="profile-label grey align-self-start" htmlFor="first-name">
                            Email:
                        </label>
                        <input
                            className="profile-input w-100 mb-3"
                            type="text"
                            id="email"
                            name="email"
                        />
                        <label className="profile-label grey align-self-start" htmlFor="first-name">
                            Username:
                        </label>
                        <input
                            className="profile-input w-100 mb-3"
                            type="text"
                            id="username"
                            name="username"
                        />
                        <label className="profile-label grey align-self-start" htmlFor="first-name">
                            Password:
                        </label>
                        <input
                            className="profile-input w-100 mb-3"
                            type="password"
                            id="password"
                            name="password"
                        />
                        <div className="profile-btn w-100 mb-2">
                            <button className="profile-button w-100">Continue</button>
                        </div>
                        <div className="blue align-self-center mb-4 small-text" onClick={() => setReg(false)}>
                            Already Registered?
                        </div>
                        <div className="small-text">
                            By registering you agree to Discord’s <NavLink to="/terms" className="blue">
                            Terms of Service
                        </NavLink> and <NavLink to="/privacy" className="blue">
                            Privacy Policy.
                        </NavLink>
                        </div>
                    </div>
                    : <div className="form col-lg-4 d-flex align-items-center p-3 flex-column">
                    {/*<iframe src="https://discord.com/widget?id=878488514507997225&theme=dark" width="350" height="500"*/}
                    {/*        frameBorder="0"*/}
                    {/*        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"/>*/}
                    <ReactSVG
                        renumerateIRIElements={false}
                        src={logo}
                        wrapper="div"
                        onClick={() => {
                        }}
                        style={{ width: "13rem" }}
                    />
                    <div className="grey mb-3">Zero Theorem invited you to join</div>
                    <div className="h4 mb-3">Zero Theorem Talk</div>
                    <div className="d-flex mb-3">
                        <div className="d-flex align-items-center mr-3 grey">
                            <div className="green-circle"/>
                            {data?.presence_count} online
                        </div>
                        <div className="d-flex align-items-center grey">
                            <div className="grey-circle"/>
                            {data?.members?.length} Members
                        </div>
                    </div>
                    <label className="profile-label grey align-self-start" htmlFor="first-name">
                        USERNAME:
                    </label>
                    <input
                        className="profile-input w-100 mb-3"
                        type="text"
                        id="firstName"
                        name="first-name"
                    />
                    <div className="profile-btn w-100 mb-2">
                        <button className="profile-button w-100">Continue</button>
                    </div>
                    <div className="blue align-self-center mb-4 small-text"
                         // onClick={() => setReg(true)}
                    >
                        <a href="https://discord.com/register">Already have an account?</a>
                    </div>
                    <div className="small-text">
                        By registering you agree to Discord’s <NavLink to="/terms" className="blue">
                        Terms of Service
                    </NavLink> and <NavLink to="/privacy" className="blue">
                        Privacy Policy.
                    </NavLink>
                    </div>
                </div>}
            </div>
        </section>
    )

};


const mapStateToProps = ({discordReducer}) => {
    return discordReducer;
};

const mapDispatchToProps = {
    get_discord,
    get_discord_error
};

export default WithApiService()(connect(mapStateToProps, mapDispatchToProps)(Discord));
