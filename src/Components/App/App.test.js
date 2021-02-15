import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe(`About component`, () => {
  describe(`Snapshot`, () => {
    it(`renders the UI as expected`, () => {
      const app = renderer.create(
        <BrowserRouter>
          <App />
        </BrowserRouter>).toJSON()
      expect(app).toMatchSnapshot()
    })

  })

  describe(`Smoke test`, () => {
    it('renders without crashing', () => {
      const div = document.createElement('div')

      ReactDOM.render(
        <BrowserRouter>
          <App />
        </BrowserRouter>, 
        div
      )
      ReactDOM.unmountComponentAtNode(div)
    })    
  })
})