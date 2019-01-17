import React from 'react'

export default class Frame extends React.PureComponent {
    render() {
        return (
            <div className="sb-widget-frame">
                <div className="sb-widget-frame-inner">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
