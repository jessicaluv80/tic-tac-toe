import React, { Component } from 'react'


class Blank extends Component {
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
                " "
            </div>
        )

    }
    componentDidMount() {
        console.log('App.componentDidMount')
    }
}

export default Blank