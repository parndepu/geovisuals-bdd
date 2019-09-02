/**
 * Add geojson object to existing map
 * @param {object} map mapbox map
 * @param {object} geojson_object geojson object containing feature, source, shape
 */
export default function (map, geojson_object)
{
    map.addLayer(geojson_object);
    return;
}