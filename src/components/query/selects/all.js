/**
 * Find all document inside collection
 * @param {*} model 
 */
export default function (model)
{
    var cursor = model.find({}).cursor();
    return cursor;
}