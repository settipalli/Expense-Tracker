import React, {Component} from 'react'
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
                                    <h5 className="card-title">Add Expense</h5>
                                    <hr/>
                                    <p className="card-text">
                                        <form>
                                            <input type="text" className="form-control form-control-lg"
                                                   placeholder="Amount" />
                                        </form>
                                    </p>
                                    <a href="/" className="btn btn-primary">Go somewhere</a>
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
