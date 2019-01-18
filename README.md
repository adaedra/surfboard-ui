# 🌊 Surfboard

![Package version](https://img.shields.io/npm/v/@surfboard/ui.svg?style=flat&logo=npm)
![License](https://img.shields.io/github/license/adaedra/surfboard-ui.svg)
![Build status](https://img.shields.io/circleci/project/github/adaedra/surfboard-ui/master.svg?style=flat&logo=circleci)

Surfboard is a modular dashboard project, based on modern web development tools (JavaScript, React,
Rx).
The aim is to create a tool that adapts to the need of its users and not the other way around, by
providing just the needed functional bricks to build your dashboard but leave all flexibility to
the user.

## `@surfboard/ui`

This component is the base graphical interface of the surfboard project. It provides the basic
bricks to create the visual part of your dashboard, connecting to a surfboard server.

## Warning

This project is still in initial development and is not completely ready yet for prime time. You
can toy with it, but be aware that big changes can arise at any moment while this project hasn't
reached the 1.0 release. Also, documentation and inter-packages dependencies may be a bit wonky
during this time.

## How to

You can see the [surfboard-example](https://github.com/adaedra/surfboard-example) repository for
an example of a surfboard dashboard.

First, add surfboard to your project:

```
npm i --save @surfboard/ui
```

You should also add Babel and Webpack to compile your files to a web archive, as well as
managing `jsx` files.

Then, create a `surfboard.client.jsx` (or any other name, this is your webpack entry point)
and setup a basic widget and a base dashboard:

```jsx
import React from 'react'
import { map } from 'rxjs/operators'
import { initialize, subscribeTo, Widget, Frame, Layout } from '@surfboard/core'

// Create a basic widget
class Clock extends Widget {
    // Define to which sources to listen to, returns an observable.
    // Automatically observed when mounted and cancelled when unmounted and mapped to state.
    subscribe() {
        return subscribeTo('clock')
    }

    render() {
        return (
            // Frame is the base of a widget
            <Frame>
                <div>{this.state.date}</div>
                <div>{this.state.time}</div>
            </Frame>
        )
    }
}

// Initialize the board. Takes a function that generates a hash containing the dashboards.
initialize(() => ({
    default: (
        <Layout.Row>
            <Clock />
        </Layout.Row>
    )
}))
```

Load the JavaScript in an HTML file (can be blank, required nodes are created automatically). Run
a surfboard server providing a `clock`, and they should connect together.
