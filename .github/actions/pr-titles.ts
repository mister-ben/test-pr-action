import * as core from '@actions/core';
import * as github from '@actions/github';


(async function run() {
  const title = github.context.payload.pull_request?.title;
  const titleRegex = /^(chore|ci|docs|feat|fix|refactor|revert|test)(\(.+\))?!?: (.+)/;

  if (!!title.match(titleRegex)) {
    core.info('PR title OK');
  } else {
    core.setFailed('Please use conventional commit style for the PR title, so the ,erged change appears in the changelog. See https://www.conventionalcommits.org/.');
  }
})();