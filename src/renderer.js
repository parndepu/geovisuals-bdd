// Plugins
import { $, jQuery } from 'jquery';

// Styles
import './styles/index.css';
import '../node_modules/mapbox-gl/dist/mapbox-gl.css';

// Components
import * as utils from './components/utils';
import * as map from './components/map';


window.onload = function () {
    utils.Set_fontawesome();
    map.Initialize_mapboxgl('map');
    return;
}