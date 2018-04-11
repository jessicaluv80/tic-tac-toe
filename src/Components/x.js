import React, { Component } from 'react'


class X extends Component {
    constructor() {
        super()
        console.log('App.constructor()')
    }

    componentWillMount() {
        console.log('App.componentWillMount()')
    }


    render() {
        console.log('App.render()')
        return (
            <div>
                X
            </div>
        )

    }
    componentDidMount() {
        console.log('App.componentDidMount')
    }
}

export default X