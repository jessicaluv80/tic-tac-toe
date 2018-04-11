import React, { Component } from 'react'
import Blank from './blank'
import X from './x'
import O from './o'


class Board extends Component {
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
                Board Game Tic Tac Toe
                <Blank />
                <X />
                <O />
            </div>)
    }

    componentDidMount() {
        console.log('App.componentDidMount')
    }
}



export default Board
