import mongoose from 'mongoose';

/**
 * Val schema
 */
export default new mongoose.Schema ({
    timelapse: {
        type: Boolean
    },
    accelerometer: {
        type: Array
    },
    gyro: {
        type: Array
    },
    rideID: {
        type: String
    },
    locations: {
        type: Array
    },
    filename: {
        type: String
    },
    startTime: {
        type: Number
    },
    endTime: {
        type: Number
    },
    id: {
        type: String
    },
    gps: {
        type: Array
    }
}, { collection: 'val' });
