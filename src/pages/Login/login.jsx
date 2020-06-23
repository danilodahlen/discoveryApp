import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import md5 from 'crypto-js/sha256';

const searchURL = 'http://localhost:3001/login/signin';

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state          = { user: '', password: ''};
        this.login          = this.login.bind(this);
        this.handleUser     = this.handleUser.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleUser(e){
        this.setState({...this.state, user: e.target.value });
    };

    handlePassword(e){
        this.setState({...this.state, password: e.target.value });
    };

    login() {
        axios.post(`${searchURL}`,{
            user: this.state.user,
            password: this.state.password
        }).then(result => {            
            this.setState({ user: result});
            window.location = "#/";
        }).catch(err => {
            console.log(err);
        });
    };

    render(){
        return( 
            <div>
                <form className="form col-md-4 col-md-offset-4">
                    <div className="form-group">
                        <label htmlFor="txtUser">Usuário:</label>
                            <input type="text" className="form-control" id="txtUser"
                                onChange={ this.handleUser }
                            ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="txtPassword">Senha:</label>
                            <input type="password" className="form-control" id="txtPassword"
                                onChange={ this.handlePassword }
                            ></input>
                    </div>
                    <div className="form-group">
                        <span><Link href="#/register">Cadastre-se</Link></span>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary pull-right" id="btnSearch" onClick={ this.login }>Entrar</button>
                    </div>
                </form>
            </div> 
        )
    }   
}