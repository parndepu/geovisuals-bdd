module.exports = {
    "make_targets": {
        "win32": [ "squirrel" ],
        "darwin": [ "zip", "dmg" ],
        "linux": [ "deb", "rpm" ]
    },
    "electronPackagerConfig": {
        "packageManager": "yarn"
    },
    "electronWinstallerConfig": {
        "name": "geovisuals-bdd"
    },
    "electronInstallerDebian": {},
    "electronInstallerRedhat": {},
    "github_repository": {
        "owner": "parndepu",
        "name": "geovisuals-bdd"
    },
    "windowsStoreConfig": {
        "packageName": "",
        "name": "geovisuals-bdd"
    }
}