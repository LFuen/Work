import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Projects from './Projects'


describe(`Projects component`, () => {
    describe(`Snapshot`, () => {
        it(`renders the UI as expected`, () => {
            const projects = renderer.create(
                <BrowserRouter>
                    <Projects />
                </BrowserRouter>).toJSON()
            expect(projects).toMatchSnapshot()
        })
    })

    describe(`Smoke test`, () => {
        it(`renders without crashing`, () => {
            const div = document.createElement('div')

            ReactDOM.render(
                <BrowserRouter>
                    <Projects />
                </BrowserRouter>,
                div
            )
            ReactDOM.unmountComponentAtNode(div)
        })
    })
})