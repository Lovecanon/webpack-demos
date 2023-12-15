import React from 'react';
import { createRoot } from 'react-dom/client';

class App extends React.Component {
    render() {
        return (
            <div>Hello World!</div>
        )
    }
}

// https://reactjs.org/link/switch-to-createroot
const container = document.getElementById('example');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
