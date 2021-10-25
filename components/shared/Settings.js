import Constants from 'expo-constants'

const settings = {
    dev: {
        apiURL: "http://192.168.1.78:9000"
    },
    staging: {
        apiURL: ""
    },
    prod: {
        apiURL: ""
    },
}

function getCurrentSettings(){
    if(__DEV__){
        return settings.dev;
    } else if (Constants.manifest.releaseChannel === 'staging'){
        return settings.staging
    } else {
        return settings.prod
    }
}

export default getCurrentSettings()