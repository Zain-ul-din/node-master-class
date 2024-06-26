# Node Js Master Class - Assignment 1

#### Generate SSL Certificate:

```sh
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```

### Explanation:

- `req`: Generates a new certificate request and signs it.
- `-newkey rsa:2048`: Creates a new certificate request and a new private key using RSA with a key size of 2048 bits.
- `-new`: Indicates that a new certificate request is being generated.
- `-nodes`: Tells OpenSSL not to encrypt the private key (no DES encryption).
- `-x509`: Outputs a self-signed certificate instead of a certificate request.
- `-days 3650`: Specifies the number of days the certificate is valid (3650 days, or 10 years, in this case).
- `-keyout key.pem`: Specifies the file to write the generated private key to.
- `-out cert.pem`: Specifies the file to write the self-signed certificate to.
