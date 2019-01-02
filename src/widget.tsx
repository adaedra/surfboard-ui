import React from 'react'
import { Observable, Subscription } from 'rxjs'
import { map } from 'lodash'

abstract class Widget<P, S> extends React.Component<P, S> {
    sources: { [name: string]: Observable<any> }
    subscriptions: Subscription[] = []

    constructor(props) {
        super(props)
        this.state = {} as any
    }

    componentDidMount() {
        this.subscriptions = map(this.sources, (observable, key) =>
            observable.subscribe(value =>
                this.setState({ [key]: value } as any)
            )
        )
    }

    componentWillUnmount() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe())
        this.subscriptions = []
    }
}

export default Widget
