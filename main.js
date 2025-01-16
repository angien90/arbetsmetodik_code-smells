import './style.css';
import { createHtml } from './src/ts/createHtml';
import { toggleLightMode } from './src/ts/toggleLightmode';

function init() {
    toggleLightMode();
    createHtml(); 
}

init();