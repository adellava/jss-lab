import React, { Component }  from 'react'
import injectSheet from 'react-jss'


// Create your style.
const style = {
    textStyle1: {
        color: 'green'
    },
    textStyle2: {
        color: 'red',
        fontSize: '26px'
    }
}

@injectSheet(style)
export default class MyComponent extends Component {
    render() {
        const {classes, children} = this.props
        return (<div className={classes.textStyle1}>
            Hello World
            <div className={classes.textStyle2}>
                from Cesena
            </div>
        </div>)
    }
}
