import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getR2D2} from '../store/actions/r2d2Action'
import { R2D2_ERROR } from '../store/types';

    class r2d2 extends Component {
    componentDidMount(){
        this.props.getR2D2()
        console.log('@r2d2 mounted');

    }
    render() {
        const {r2d2} = this.props.r2d2
        console.log('\x1b[36m%s\x1b[33m%s\x1b[36m%s\x1b[0m', '\n| r2d2 | ', `${JSON.stringify(r2d2, null, 4)}`, '|\n');

        return (
            <div>
                <h1>I am R2D2 component</h1>

                <h6>{r2d2.name}</h6>
                <h6>{r2d2.url}</h6>
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({r2d2:state.r2d2})

export default connect(mapStateToProps, {getR2D2})(r2d2)