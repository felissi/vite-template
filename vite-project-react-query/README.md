# Install react-query

```bash
npm i @tanstack/react-query
```

# Install eslint-react-query [#](https://tanstack.com/query/v4/docs/react/eslint/eslint-plugin-query)

```bash
npm i -D @tanstack/eslint-plugin-query
```
Usage

Add @tanstack/eslint-plugin-query to the plugins section of your .eslintrc configuration file:
```json
{
  "plugins": ["@tanstack/query"]
}
```
Then configure the rules you want to use under the rules section:

```json
{
  "rules": {
    "@tanstack/query/exhaustive-deps": "error",
    "@tanstack/query/prefer-query-object-syntax": "error"
  }
}
```
Recommended config

You can also enable all the recommended rules for our plugin. Add plugin:@tanstack/eslint-plugin-query/recommended in extends:
```json
{
  "extends": ["plugin:@tanstack/eslint-plugin-query/recommended"]
}
```
