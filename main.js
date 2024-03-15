import sweetalert2 from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.10.6/+esm'
import App from './modules/app.js';
import './modules/drupalModuleInfo.js';
import './modules/selection.js';
import './modules/imgAnchorModal.js';
window.sweetalert2 = window.Swal = window.sweetAlert = sweetalert2;
//run app
App();

const cssModule = await import('./style.css', {
    assert: { type: 'css' }
});
document.adoptedStyleSheets = [cssModule.default];