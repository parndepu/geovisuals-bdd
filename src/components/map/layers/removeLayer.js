/**
 * Remove mapbox layer by id
 * @param {*} map mapbox map
 * @param {*} layer_id layer id
 */
export default function (map, layer_id)
{
    if (map.getLayer(layer_id)) {
        map.removeLayer(layer_id);
    }
}