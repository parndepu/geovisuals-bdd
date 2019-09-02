/**
 * Remove layer source from mapbox map
 * @param {*} map mapbox map
 * @param {*} source_id source id
 */
export default function (map, source_id)
{
    // Remove source if exist
    if (map.getSource(source_id)) {
        map.removeSource(source_id);
    }
    return;
}