/* eslint-disable no-template-curly-in-string */

const releaseNotesGeneratorOptions = {
  writerOpts: {
    transform: (commit, context) => {
      const issues = [];

      if (commit.type === 'breaking') {
        commit.type = 'Breaking';
      } else if (commit.type === 'feat') {
        commit.type = 'Features';
      } else if (commit.type === 'fix') {
        commit.type = 'Bug Fixes';
      } else if (commit.type === 'refactor') {
        commit.type = 'Code Refactoring';
      } else if (commit.type === 'config') {
        commit.type = 'Config';
      } else if (commit.type === 'test') {
        commit.type = 'Tests';
      } else if (commit.type === 'docs') {
        commit.type = 'Documentation';
      } else if (commit.type === 'no-release') {
        return;
      }
      if (typeof commit.hash === 'string') {
        commit.shortHash = commit.hash.substring(0, 7);
      }

      if (typeof commit.subject === 'string') {
        let url = context.repository
          ? `${context.host}/${context.owner}/${context.repository}`
          : context.repoUrl;
        if (url) {
          url = `${url}/issues/`;
          // Issue URLs.
          commit.subject = commit.subject.replace(/#([0-9]+)/g, (_, issue) => {
            issues.push(issue);
            return `[#${issue}](${url}${issue})`;
          });
        }
        if (context.host) {
          // User URLs.
          commit.subject = commit.subject.replace(
            /\B@([a-z0-9](?:-?[a-z0-9/]){0,38})/g,
            (_, username) => {
              if (username.includes('/')) {
                return `@${username}`;
              }

              return `[@${username}](${context.host}/${username})`;
            }
          );
        }
      }

      commit.references = commit.references.filter(reference => {
        if (issues.indexOf(reference.issue) === -1) {
          return true;
        }

        return false;
      });

      return commit;
    }
  }
};

const verifyConditions = [
  ['@semantic-release/changelog', releaseNotesGeneratorOptions],
  '@semantic-release/npm',
  [
    '@semantic-release/git',
    {
      assets: ['package.json', 'CHANGELOG.md'],
      message:
        'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    }
  ],
  '@semantic-release/github'
];
const analyzeCommits = [
  [
    '@semantic-release/commit-analyzer',
    {
      preset: 'angular',
      releaseRules: './rules.js'
    }
  ]
];
const generateNotes = ['@semantic-release/release-notes-generator'];
const prepare = [
  '@semantic-release/changelog',
  '@semantic-release/npm',
  [
    '@semantic-release/git',
    {
      assets: ['package.json', 'CHANGELOG.md'],
      message:
        'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    }
  ]
];

const publish = ['@semantic-release/npm', '@semantic-release/github'];

const verifyRelease = [];
const fail = [];
const success = [];
const addChannel = [];

module.exports = {
  repositoryUrl: 'https://github.com/bi-zone/cz-conventional-changelog-bizone',
  branches: ['master'],
  verifyConditions,
  analyzeCommits,
  verifyRelease,
  generateNotes,
  prepare,
  publish,
  fail,
  success,
  addChannel
};
