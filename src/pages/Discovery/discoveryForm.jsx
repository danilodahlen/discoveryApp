import React, { Component } from 'react';

export default class DiscoveryForm extends Component {
    render(){
        return(
            <div>
                <form className="form col-md-5 col-md-offset-3">
                    <div className="form-group">
                        <label htmlFor= "txtWho">Quem?</label>
                        <input type="text" maxLength="100" className="form-control" id="txtWho"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="txtFullText">Digite aqui sua descoberta?</label>
                        <textarea rows="10" className="form-control" id="txtFullText"></textarea>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary pull-right" id="btnSave">Salvar</button>
                    </div>
                </form>
            </div>
        )
    }   
}