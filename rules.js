/* eslint-disable functional/immutable-data */
module.exports = [
  { breaking: true, release: 'major' },
  { revert: true, release: 'patch' },
  { type: 'feat', release: 'minor' },
  { type: 'fix', release: 'patch' },
  { type: 'chore', release: 'patch' },
  { type: 'сontinute', release: false },
];
