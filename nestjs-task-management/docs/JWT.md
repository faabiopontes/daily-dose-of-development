# JWT

## What are JSON Web Tokens?

- Open-source industry standard (RFC-7519)
- Usable for Authorization or secure exchange of information between parties.
- Verify that the sender is who it/he/she claims to be.
- Signed by the issuer, using a secret or keypair (HMAC algorithm, RSA or ECDSA).

## JWT Structure

- **Header** contains metadata about the token (type, hashing algorithm, etc).
- **Payload** contains claims (statements about an entity - for example, a user) and additional data.
- **Signature** is the result of the encoded header, the encoded payload, signed against a secret.

## Practical Excample

1. User "John Doe" signs into our application. We want to create a token with which John can authorize for a while.
2. We create a payload containing the username and role. We then sign the token with an expiry time of 1 hour. We use a secret for signing.

## Authorizing Real John Doe

3. John Doe sends a request to our API. He wants to delete a task. In the request headers, we can find a JWT token.
4. To validate his token, we take the headers and payload, and re-generate the signature using our secret.
5. We then compare the result signature with the signature in his token.
6. When they are equal, the payload is valid.

## Rejecting Fake John Doe

3. Dohn joe sends a modified JWT payload to our API.
4. When the signature is re-generated and compared to the one in the token, there is a mismatch
5. That way we know that the JWT request should be rejected

## More about JSON Web Tokens

- JSON Web Tokens can be decoded by anyone. They should not contain sensitive information such as passwords.
- It is useful for front-end applications to use these tokens to toggle features conditionally. For example, if a user is an administrator, we could show or hide a certain button based on the claims in the token.
- JWTs should ideally be short-lived.
