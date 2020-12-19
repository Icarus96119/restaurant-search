export default interface IAzADConfig {
    auth: {
        clientId: string,
        authority: string,
        redirectUri: string,
        graphScopes: string[]
    }
}