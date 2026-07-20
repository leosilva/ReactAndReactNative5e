# ReactAndReactNative5e

A small React learning project built with Vite. The app demonstrates basic React component structure, props, children, JSX values, event handlers, and the default Vite React starter UI.

## Tech Stack

- React 19
- Vite 8
- JavaScript
- ESLint

## Project Structure

```text
.
├── public/              # Static assets served by Vite
├── src/
│   ├── App.jsx          # Vite starter-style React demo
│   ├── ButtonWithEvent.jsx
│   ├── DynamicComponent.jsx
│   ├── MyButton.jsx
│   ├── MyComponent.jsx
│   ├── MySection.jsx
│   ├── main.jsx         # React entry point
│   ├── index.css
│   └── App.css
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173/`.

## Available Scripts

```sh
npm run dev
```

Starts the Vite development server with hot module replacement.

```sh
npm run build
```

Builds the app for production into `dist`.

```sh
npm run preview
```

Serves the production build locally.

```sh
npm run lint
```

Runs ESLint across the project.

## Current App

The current entry point is [`src/main.jsx`](./src/main.jsx). It renders `ButtonWithEvent`, a small component that logs `Button clicked!` to the browser console when its button is clicked.

Other example components are available in `src` and can be enabled by changing the imports and rendered component in `main.jsx`:

- `App.jsx`: Vite starter-style page with a counter and resource links.
- `MyComponent.jsx`: Simple static section component.
- `MyButton.jsx`: Button component using `props.children`.
- `MySection.jsx`: Section wrapper component using `props.children`.
- `DynamicComponent.jsx`: JSX values passed into button and input attributes.
- `ButtonWithEvent.jsx`: Button click event handler example.

## Development Notes

- Edit files in `src` to change the React UI.
- Static assets go in `public` or `src/assets`.
- The project is configured as an ES module app with `"type": "module"` in `package.json`.
- There is currently no automated test script configured.
