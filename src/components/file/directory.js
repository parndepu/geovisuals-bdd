import * as fs from 'fs';

/**
 * Read all file names in specific directory
 * @param {String} dir_path - path to directory
 */
export default function (dir_path) {

    return new Promise (function (resolve, reject) {
        
        try {
            
            var files = [];
            // Read all files in directory
            fs.readdirSync(dir_path).forEach( function (file) {
                files.push(file);
            });
            resolve(files);

        } catch (error) {
            reject(error);
        }

    });

}