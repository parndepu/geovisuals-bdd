/**
 * Update source with new data set
 * @param {*} source_id 
 * @param {*} data 
 */
export default function (map, source_id, data)
{
    map.getSource(source_id).setData(data);
    return;
}