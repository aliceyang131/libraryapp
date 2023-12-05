export const oktaConfig = {
    clientId: '0oad4e2tcelHejjCG5d7',
    issuer:'https://dev-24830969.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid','profile','email'],
    pkce: true,
    disableHttpsCheck: true,
}