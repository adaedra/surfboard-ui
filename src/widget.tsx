import React from 'react'
import { Observable, Subscription } from 'rxjs'

abstract class Widget<P, S> extends React.Component<P, S> {
    subscription?: Subscription

    constructor(props) {
        super(props)
        this.state = {} as any
    }

    subscribe(): Observable<S> | undefined {
        return undefined
    }

    componentDidMount() {
        const obs = this.subscribe()
        if (obs) {
            this.subscription = obs.subscribe(value => this.setState(value))
        }
    }

    componentWillUnmount() {
        if (this.subscription) {
            this.subscription.unsubscribe()
            this.subscription = undefined
        }
    }
}

export default Widget
