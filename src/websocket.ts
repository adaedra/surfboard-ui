import { BehaviorSubject, Observable } from 'rxjs'
import { pluck, map } from 'rxjs/operators'
import { webSocket } from 'rxjs/webSocket'

let dispatcher = new BehaviorSubject<{ [key: string]: any }>({})

export function start() {
    webSocket('ws://localhost:1337').subscribe(dispatcher)
}

dispatcher.subscribe(value => console.log('dispatcher', value))

export function subscribeTo<T>(key: string): Observable<{ [key: string]: T }> {
    return dispatcher.pipe(
        pluck(key),
        map((value: T) => ({ [key]: value }))
    )
}

export default dispatcher
