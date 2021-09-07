import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUsers} from '../store/actions/usersAction'

    class users extends Component {
    componentDidMount(){
        this.props.getUsers()
        console.log('@users mounted');

    }
    render() {
        const {users} = this.props.users
        console.log('\x1b[36m%s\x1b[33m%s\x1b[36m%s\x1b[0m', '\n| USERS | ', `${JSON.stringify(users, null, 4)}`, '|\n');

        return (
            <div>
                <h1>I am users component</h1>
                {users.map(u =>
                        <React.Fragment key={u.id}>
                            <h6 >{u.name}</h6>
                        </React.Fragment>
                )}
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {getUsers})(users)