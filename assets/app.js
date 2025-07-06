import {registerReactControllerComponents} from '@symfony/ux-react';
import './bootstrap.js';
import './styles/app.css';

// Register all React components from ./react and subdirectories
registerReactControllerComponents(
    require.context('./react/components', true, /\.(j|t)sx?$/)
);

// Optional loader cleanup
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader-wrapper');
    if (loader) {
        setTimeout(() => loader.remove(), 200);
    }
});
