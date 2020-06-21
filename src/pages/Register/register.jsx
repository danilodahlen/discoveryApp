import React, { Component } from 'react';

export default class Register extends Component {
    render(){
        return( 
            <div>
                <form className="form col-md-5 col-md-offset-3">
                    <div className="form-group">
                        <label htmlFor="txtNameFull">Nome completo:</label>
                        <input type="text" maxLength="100" className="form-control" id="txtNameFull"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="txtDateBorn">Data de nascimento:</label>
                        <input type="date" className="form-control" id="txtDateBorn">
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="txtNewUser">Usuário:</label>
                        <input type="text" maxLength="40" className="form-control" id="txtNewUser" placeholder="ex..(usuario@email.com.br)"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="txtNewPassword">Informe uma senha:</label>
                        <input type="password" maxLength="10" className="form-control" id="txtNewPassword"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="txtConfirmPassword">Confirme a senha:</label>
                        <input type="password" maxLength="10" className="form-control" id="txtConfirmPassword"></input>
                    </div>
                    <button className="btn btn-primary" id="btnSave pull-right">Salvar</button>
                </form>
            </div> 
        )
    }   
}