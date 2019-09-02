/**
 * Create geojson shape
 * @param {*} id 
 * @param {*} shape 
 * @param {*} source 
 * @param {*} paint 
 * @param {*} layout 
 */
export default function (id, shape, source, paint, layout)
{
    return {
        'id': id,
        'type': shape,
        'source': source,
        'layout': layout,
        'paint': paint
    }
}