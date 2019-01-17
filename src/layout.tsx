import React from 'react'

export enum Direction {
    Horizontal = 'horizontal',
    Vertical = 'vertical'
}

interface LayoutProps {
    direction: Direction
}

export class Layout extends React.PureComponent<LayoutProps> {
    render() {
        return (
            <div className={`sb-layout sb-layout-${this.props.direction}`}>
                {this.props.children}
            </div>
        )
    }
}

function withDisplayName<P>(
    name: string,
    component: React.FunctionComponent<P>
): React.FunctionComponent<P> {
    component.displayName = name
    return component
}

export const Row = React.memo(
    withDisplayName('Layout.Row', ({ children }) => (
        <Layout direction={Direction.Horizontal}>{children}</Layout>
    ))
)

export const Column = React.memo(
    withDisplayName('Layout.Column', ({ children }) => (
        <Layout direction={Direction.Horizontal}>{children}</Layout>
    ))
)
