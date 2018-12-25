import { Component } from 'react'

interface SelectorProps {
    boards: {
        [key: string]: JSX.Element
    }
}

interface SelectorState {
    board: string
}

class Selector extends Component<SelectorProps, SelectorState> {
    constructor(props: any) {
        super(props)
        this.state = { board: 'default' }
    }

    render() {
        return this.props.boards[this.state.board]
    }
}

export default Selector
