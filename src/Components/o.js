import React, { Component } from 'react'


class O extends Component {
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
                O
            </div>
        )

    }
    componentDidMount() {
        console.log('App.componentDidMount')
    }
}

export default O