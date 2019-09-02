import mongoose from 'mongoose';

/**
 * Create mongoose model
 * @param {*} name model name
 * @param {*} schema model schema
 */
export default function (name, schema)
{
    return mongoose.model(name, schema);
}