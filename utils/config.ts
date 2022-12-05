import getConfig from "next/config";

export function url(filename: string) {
    const { publicRuntimeConfig } = getConfig() as {
        publicRuntimeConfig: { urlPrefix: string }
    }
    return publicRuntimeConfig.urlPrefix + filename;
}