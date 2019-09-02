/**
 * Create source and add to the map
 * @param {*} map mapbox map
 * @param {*} source_id source id
 * @param {*} geojson_feature json feature
 */

export default function (map, source_id, geojson_feature) {
    
    map.addSource(source_id, {
        type: 'geojson',
        data: geojson_feature
    });

    return;
}