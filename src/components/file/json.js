import * as fs from 'fs';

export default function (files, directory) {
    
    return new Promise (function (resolve, reject) {

        for (let i = 0; i < files.length; ++i) {

            let file = files[i];

            fs.readFileSync(directory + file, function (err, data) {

                if (err) reject(err);

                console.log(JSON.parse(data));

            });

        }

    });

}