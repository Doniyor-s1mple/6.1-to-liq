import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Xodimlar from './Pages/Xodimlar'
import Lavozimlar from './Pages/Lavozimlar'
import Ilmiy_daraja from './Pages/Ilmiy_daraja'

const App = () => {
    return (
        <div className='contaiener my-3'>
            <div className="row">
                <div className="col-6 offset-3">
                    <Link className='btn btn-info' to='/xodimlar'>Xodimlar</Link>
                    <Link className='btn btn-warning mx-2' to='/lavozimlar'>Lavozimlar</Link>
                    <Link className='btn btn-danger' to='/ilmiy_daraja'>Ilmiy daraja</Link>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12">
                    <Switch>
                        <Route path='/xodimlar' component={Xodimlar} />
                        <Route path='/lavozimlar' component={Lavozimlar} />
                        <Route path='/ilmiy_daraja' component={Ilmiy_daraja} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default App