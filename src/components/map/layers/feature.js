/**
 * Create geojson features
 * @param {*} geometry 'LineString', 'Point'
 * @param {*} coordinates 2d array (e.g., trajectory, coordinates) 
 * @param {*} properties feature properties
 */
export default function (geometry, coordinates, properties)
{
    return {
        'type': 'Feature',
        'geometry': {
            'type': geometry,
            'coordinates': coordinates
        },
        'properties': properties
    }
}