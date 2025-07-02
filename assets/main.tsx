import { registerReactControllerComponents } from '@symfony/ux-react';

// this auto-loads any components in assets/controllers/
registerReactControllerComponents(require.context('./controllers', true, /\.(j|t)sx?$/));
