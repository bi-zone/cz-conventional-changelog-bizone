module.exports = {
  types: {
    feat: {
      description: 'A new feature (will bump version up to this: v1.0.0 -> v1.1.0)',
      title: 'Features'
    },
    fix: {
      description: 'A bug fix (will bump version up to this: v1.0.0 -> v1.0.1)',
      title: 'Bug Fixes'
    },
    chore: {
      description:
        "Other changes that don't modify src files like any config fixes, docs, tests, refactoring etc. (will bump version up to this: v1.0.0 -> v1.0.1)",
      title: 'Chores'
    },
    revert: {
      description: 'Reverts a previous commit (will bump version up to this: v1.0.0 -> v1.0.1)',
      title: 'Reverts'
    },
    сontinute: {
      description: 'Continute any task without triggering (will do nothing)',
      title: 'Continute'
    }
  }
}
