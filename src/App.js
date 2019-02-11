import React, {Component} from 'react'
import {MapPin} from 'react-feather'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row title-border">
                    <div className="col">
                        <h1 className="bd-title">Expense Tracker</h1>
                    </div>
                </div>
                <div className="container container-body">
                    <div className="row">
                        <div className="col-sm">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row justify-content-between">
                                        <div className="col">
                                            <h5 className="card-title">Add Expense</h5>
                                        </div>
                                        <div className="col-3-auto">
                                            <div className="row">
                                                <div className="col-1">
                                                    <MapPin color="#999" size="20"/>
                                                </div>
                                                <div className="col">
                                                    <span>London, UK</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <hr/>
                                    <p className="card-text">
                                        <form>
                                            <input type="text" className="form-control form-control-lg"
                                                   placeholder="Amount"/>
                                        </form>
                                    </p>
                                    <a href="/" className="btn btn-lg btn-primary">Save</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default App
