// Plugins
import { $, jQuery } from 'jquery';

// Styles
import './styles/index.css';
import '../node_modules/mapbox-gl/dist/mapbox-gl.css';

// Import all components
import * as utils from './components/utils';
import * as map from './components/map';
import * as file from './components/file';

export var geovisuals = geovisuals || {};

geovisuals.map = undefined;
geovisuals.gps_dir = './resources/bdd100k/info/100k/train/';

window.onload = function () {
    
    utils.Set_fontawesome();
    
    geovisuals.map = map.Create_map('map');

    file.Read_directory(geovisuals.gps_dir).then(function (files) {
        file.Read_json(files, geovisuals.gps_dir).then(function (json_data) {
            console.log(json_data);
        });
    });

    return;
}