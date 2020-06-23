import React, { Component } from 'react';
import { Link } from 'react-router';

export default class DiscoveryList extends Component {
    render(){
        return(
            <div>
                <Link href="#/new-discovery"><button class="btn btn-primary pull-right">Criar descoberta</button></Link>
                <table className="table">   
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Quem?</th>
                        <th scope="col">Descoberta</th>
                        <th scope="col">Data e hora</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr key={'1'}>
                        <td>{ 'Danilo' }</td>
                        <td>{ 'Come feijão com arroz' }</td>
                        <td>{ '01/05/2020 08:00' }</td>
                        <td><button className="btn btn-success">Aprovar</button></td>
                        <td><button className="btn btn-danger">Recusar</button></td>
                    </tr>
                    <tr key={'2'}>
                        <td>{ 'Leticia' }</td>
                        <td>{ 'Come arroz com feijão' }</td>
                        <td>{ '01/05/2020 08:00' }</td>
                        <td><button className="btn btn-success">Aprovar</button></td>
                        <td><button className="btn btn-danger">Recusar</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }   
}