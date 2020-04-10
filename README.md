# cz-conventional-changelog-bizone

Part of the [commitizen](https://github.com/commitizen/cz-cli) family. Prompts for [conventional changelog](https://github.com/conventional-changelog/conventional-changelog) standard.

## Configuration

## Rules for release.config.js

Using the semantic-release commit-analyzer plugin, add this to config:

```json5
[
  [
    '@semantic-release/commit-analyzer',
    {
      preset: 'angular',
      releaseRules: './node_modules/cz-conventional-changelog-bizone/rules.js'
    }
  ]
]
```

### package.json

Like commitizen, you specify the configuration of cz-conventional-changelog through the package.json's `config.commitizen` key.

```json5
{
  // ...  default values
  config: {
    commitizen: {
      path: './node_modules/cz-conventional-changelog',
      maxHeaderWidth: 100,
      maxLineWidth: 100,
      defaultType: '',
      defaultScope: '',
      defaultSubject: '',
      defaultBody: '',
      defaultIssues: ''
    }
  }
  // ...
}
```

### Environment variables

The following environment varibles can be used to override any default configuration or package.json based configuration.

- CZ_TYPE = defaultType
- CZ_SCOPE = defaultScope
- CZ_SUBJECT = defaultSubject
- CZ_BODY = defaultBody
- CZ_MAX_HEADER_WIDTH = maxHeaderWidth
- CZ_MAX_LINE_WIDTH = maxLineWidth

### Commitlint

If using the [commitlint](https://github.com/conventional-changelog/commitlint) js library, the "maxHeaderWidth" configuration property will default to the configuration of the "header-max-length" rule instead of the hard coded value of 100. This can be ovewritten by setting the 'maxHeaderWidth' configuration in package.json or the CZ_MAX_HEADER_WIDTH environment variable.
