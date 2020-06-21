import React, { Component } from 'react';
import axios from 'axios';

const searchURL = 'https://localhost:3000/controllers/login/signin';

export default class Login extends Component {

    constructor(props){
        super(props);    

        this.state = { user: '', password: ''};
        this.login    = this.login.bind(this);
    }

    login() {
        axios.get(`${searchURL}`,{
            user: this.state.user,
            password: this.state.password
        }).then(result => {
            console.log(result);
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
                                
                            >
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="txtPassword">Senha:</label>
                            <input type="password" className="form-control" id="txtPassword"
                            >
                        </input>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary pull-right" id="btnSearch" onClick={ this.login }>Entrar</button>
                    </div>
                </form>
            </div> 
        )
    }   
}