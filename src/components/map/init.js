import mapboxgl from 'mapbox-gl';
import { default as Get_accessToken } from './token';

/**
 * Initialize mapboxgl
 * @param {*} div_id 
 */
export default function (div_id) 
{
    // Get mapboxgl access token
    mapboxgl.accessToken = Get_accessToken();

    // Initialize map
    let map = new mapboxgl.Map({
        container: div_id,
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-74.50, 40],
        zoom: 9,
        pitch: 45
    });

    return map;
}