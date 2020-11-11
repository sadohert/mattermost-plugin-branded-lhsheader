// This file is automatically generated. Do not modify it manually.

const manifest = JSON.parse(`
{
    "id": "com.stuartdoherty.mattermost-plugin-branded-lhsheader",
    "name": "Branded Lefthand Side Header",
    "description": "A simple Webapp Plugin for Mattermost to persist a branded header for organizations.",
    "version": "0.2.0",
    "min_server_version": "5.12.0",
    "webapp": {
        "bundle_path": "webapp/dist/main.js"
    },
    "settings_schema": {
        "header": "",
        "footer": "",
        "settings": []
    }
}
`);

export default manifest;
export const id = manifest.id;
export const version = manifest.version;