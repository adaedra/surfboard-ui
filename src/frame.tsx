import React from 'react'

export default class Frame extends React.PureComponent {
    render() {
        return <div className="sb-widget-frame">{this.props.children}</div>
    }
}
