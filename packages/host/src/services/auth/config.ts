export const config = {
  issuer: "http://localhost:8080/realms/superapp-demo",
  clientId: "superapp-mobile",
  redirectUrl: "com.superappdemo://oauthredirect",
  scopes: ["openid", "profile", "email"],
  usePKCE: true,
  serviceConfiguration: {
    authorizationEndpoint:
      "http://localhost:8080/realms/superapp-demo/protocol/openid-connect/auth",
    tokenEndpoint:
      "http://localhost:8080/realms/superapp-demo/protocol/openid-connect/token",
    revocationEndpoint:
      "http://localhost:8080/realms/superapp-demo/protocol/openid-connect/logout",
  },
};