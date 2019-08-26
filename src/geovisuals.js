// Plugins
import { $, jQuery } from 'jquery';

// Styles
import './styles/index.css';
import '../node_modules/mapbox-gl/dist/mapbox-gl.css';

// Components
import * as utils from './components/utils';
import * as map from './components/map';

export var geovisuals = geovisuals || {};
geovisuals.map = undefined;

window.onload = function () {
    utils.Set_fontawesome();
    geovisuals.map = map.Create_map('map');
    return;
}