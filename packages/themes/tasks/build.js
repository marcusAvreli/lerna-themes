/**
 * Copyright IBM Corp. 2015, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable no-console */

'use strict';

const { reporter } = require('@lerna-themes/cli-reporter');
const { generate } = require('@lerna-themes/scss-generator');
const fs = require('fs-extra');
const path = require('path');
const buildCompatThemesFile = require('./builders/compat/themes');
async function build() {
	 reporter.info('Building scss files for themes...');
	   const SCSS_DIR = path.resolve(__dirname, '../scss');
  const GENERATED_SCSS_DIR = path.join(SCSS_DIR, 'generated');
  const files = [
    {
      filepath: path.join(SCSS_DIR, 'compat', 'generated', '_themes.scss'),
      builder() {
        return buildCompatThemesFile();
      },
    }
  ];
	  reporter.success('Done! 🎉');
}

build().catch((error) => {
  console.error(error);
  process.exit(1);
});