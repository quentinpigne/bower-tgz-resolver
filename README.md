# bower-tgz-resolver

A custom Bower resolver dedicated to decompress Gzip-compressed TAR archives.

## Installation

`npm install -g @quentinpigne/bower-tgz-resolver`

In order to use Bower with Gzip-compressed TAR archives you need 2 components (npm packages):

1. [@quentinpigne/bower-tgz-resolver](https://www.npmjs.com/package/@quentinpigne/bower-tgz-resolver) - A custom, pluggable Bower resolver which is dedicated to decompress Gzip-compressed TAR archives.
2. [bower](https://www.npmjs.com/package/bower) - Bower version 1.8.0 and above.

## Client Configuration

Edit your ~/.bowerrc and add the _@quentinpigne/bower-tgz-resolver_.

```json
{
  "resolvers": ["@quentinpigne/bower-tgz-resolver"]
}
```
