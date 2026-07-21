module.exports = {
  default: {
    require: ['tests/staging/step_definitions/**/*.js'],
    format: ['progress', 'html:cucumber-report.html'],
    paths: ['tests/staging/features/**/*.feature'],
    timeout: 60000 // Set default step timeout to 60 seconds
  }
};
