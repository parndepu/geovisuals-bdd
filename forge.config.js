module.exports = {
    "packagerConfig": {},
    "makers": [
        {
            "name": "@electron-forge/maker-squirrel",
            "config": {
              "name": "geovisuals-bdd"
            }
        },
        {
            "name": "@electron-forge/maker-zip",
            "platforms": [
                "darwin"
            ]
        },
        {
        "name": "@electron-forge/maker-deb",
            "config": {}
        },
        {
        "name": "@electron-forge/maker-rpm",
            "config": {}
        }
    ],
    "plugins": [
        [
            "@electron-forge/plugin-webpack",
            {
                "mainConfig": "./webpack.main.config.js",
                "renderer": {
                    "config": "./webpack.renderer.config.js",
                    "entryPoints": [
                        {
                            "html": "./src/views/index.html",
                            "js": "./src/geovisuals.js",
                            "name": "main_window"
                        }
                    ]
                }
            }
        ]
    ]
}