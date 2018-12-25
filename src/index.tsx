import React from 'react'
import { render } from 'react-dom'
import { start as startWebsocket } from './websocket'
import { start as startView } from './view'
import Selector from './selector'

export function start(rootNode: Element) {
    startWebsocket()
    startView(rootNode)
}

type Config = {
    [x: string]: JSX.Element
}

export function initialize(configGenerator: () => Config) {
    document.addEventListener('DOMContentLoaded', () => {
        const config = configGenerator()

        const rootNode = document.createElement('div')
        rootNode.classList.add('sb-root')

        document.body.appendChild(rootNode)
        render(<Selector boards={config} />, rootNode)
    })
}
