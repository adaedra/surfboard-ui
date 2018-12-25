import { ReplaySubject } from 'rxjs'
import { webSocket } from 'rxjs/webSocket'

let dispatcher = new ReplaySubject()

export function start() {
    webSocket('ws://localhost:1337').subscribe(dispatcher)
}

dispatcher.subscribe(value => console.log('dispatcher', value))

export default dispatcher
