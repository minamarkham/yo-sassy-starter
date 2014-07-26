'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var SassyStarterGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  copyFiles: function () {
    this.log(yosay('A starter toolkit based on Scalable and Modular Architecture for CSS (SMACSS) for Sass (SCSS) projects. Do what you\'d like with it :)'));
    // Make directories
    this.mkdir('js');
    this.mkdir('scss');
    // Copy js file templates
    this.copy('js/global.js', 'js/global.js');
    this.copy('js/plugins.js', 'js/plugins.js');
    // Copy project files
    this.copy('.editorconfig', '.editorconfig');
    this.copy('package.json', 'package.json');
    this.copy('.htaccess', '.htaccess');
    this.copy('.gitignore', '.gitignore');
    this.copy('Gruntfile.js', 'Gruntfile.js');
    // Copy PNG icons
    this.copy('favicon.png', 'favicon.png');
    this.copy('apple-touch-icon.png', 'apple-touch-icon.png');
    this.copy('apple-touch-icon-57x57-precomposed.png', 'apple-touch-icon-57x57-precomposed.png');
    this.copy('apple-touch-icon-72x72-precomposed.png', 'apple-touch-icon-72x72-precomposed.png');
    this.copy('apple-touch-icon-precomposed.png', 'apple-touch-icon-precomposed.png');
    // Copy rb files
    this.copy('config.rb', 'config.rb');
    this.copy('deploy.rb', 'deploy.rb');
    // Copy misc text files
    this.copy('crossdomain.xml', 'crossdomain.xml');

    this.copy('humans.txt', 'humans.txt');
    this.copy('robots.txt', 'robots.txt');

    this.copy( 'readme.md', 'readme.md');
    this.copy( 'LICENSE.md', 'LICENSE.md');
    this.copy( 'index.html', 'index.html');
  },
  copyScssFiles: function () {
    this.mkdir('scss/base');
    this.mkdir('scss/layout');
    this.mkdir('scss/modules');
    this.mkdir('scss/states');
    this.mkdir('scss/themes');
    this.mkdir('scss/utilities');

    // Copy Base files
    this.copy('scss/base/_base.scss', 'scss/base/_base.scss');
    this.copy('scss/base/_index.scss', 'scss/base/_index.scss');
    this.copy('scss/base/_normalize.scss', 'scss/base/_normalize.scss');

    // Copy Layout files
    this.copy('scss/layout/_index.scss', 'scss/layout/_index.scss');

    // Copy Module files
    this.copy('scss/modules/_index.scss', 'scss/modules/_index.scss');

    // Copy state files
    this.copy('scss/states/_index.scss', 'scss/states/_index.scss');
    this.copy('scss/states/_print.scss', 'scss/states/_print.scss');
    this.copy('scss/states/_states.scss', 'scss/states/_states.scss');
    this.copy('scss/states/_touch.scss', 'scss/states/_touch.scss');

    // Copy theme files
    this.copy('scss/themes/beccapurple.scss', 'scss/themes/beccapurple.scss');

    // Copy utilities
    this.copy('scss/utilities/_fonts.scss', 'scss/utilities/_fonts.scss');
    this.copy('scss/utilities/_functions.scss', 'scss/utilities/_functions.scss');
    this.copy('scss/utilities/_global.scss', 'scss/utilities/global.scss');
    this.copy('scss/utilities/_helpers.scss', 'scss/utilities/_helpers.scss');
    this.copy('scss/utilities/_index.scss', 'scss/utilities/_index.scss');
    this.copy('scss/utilities/_lib.scss', 'scss/utilities/_lib.scss');
    this.copy('scss/utilities/_mixins.scss', 'scss/utilities/_mixins.scss');
    this.copy('scss/utilities/lib/_pesticide.scss', 'scss/utilities/lib/_pesticide.scss');

    // Copy misc SCSS files
    this.copy('scss/_shame.scss', 'scss/_shame.scss');

    // Copy manifest files
    this.copy('scss/ie.scss', 'scss/ie.scss');
    this.copy('scss/styles.scss', 'scss/styles.scss');
  }
});

module.exports = SassyStarterGenerator;
