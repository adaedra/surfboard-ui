import { start as startWebsocket } from './websocket'
import { start as startView } from './view'

export function start(rootNode: Element) {
    startWebsocket()
    startView(rootNode)
}
