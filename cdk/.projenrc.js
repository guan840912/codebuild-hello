const { AwsCdkTypeScriptApp } = require('projen');

const project = new AwsCdkTypeScriptApp({
  cdkVersion: '1.73.0',
  defaultReleaseBranch: 'main',
  jsiiFqn: 'projen.AwsCdkTypeScriptApp',
  name: 'codebuildlab',
  cdkDependencies: [
    '@aws-cdk/aws-codebuild',
  ],
  dependabot: false,
});

project.synth();
