import './style.css';
import { createHtml } from './src/js/createHtml';
import { toggleLightMode } from './src/js/toggleLightmode';

function init() {
    toggleLightMode();
    createHtml(); 
}

init();