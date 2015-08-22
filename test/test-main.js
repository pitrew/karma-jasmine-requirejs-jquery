var allTestFiles = [], allSrcFiles = {};
var TEST_REGEXP = /(spec|test)\.js$/i;
var SRC_REGEXP = /\.js$/i;
var FIX_REGEXP = /fixtures/i;

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');
    allTestFiles.push(normalizedTestModule);
  }
  else if (SRC_REGEXP.test(file)) {
    var normalizedSrcModule = file.replace(/^.*[\\\\\/]|\.js$/g, '');
    var normalizedSrcPath = file.replace(/^\/base\/|\.js$/g, '');
	allSrcFiles[normalizedSrcModule] = normalizedSrcPath;
//	console.log(normalizedSrcModule + ' -> ' + normalizedSrcPath);
  }
  else if (FIX_REGEXP.test(file)) {
    var normalizedFixModule = file.replace(/^\/base\/|\.js$/g, '');
	allSrcFiles[normalizedFixModule] = normalizedFixModule;
  }
});

jasmine.getFixtures().fixturesPath = 'base/test/spec/javascripts/fixtures';

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  paths: allSrcFiles,

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
