import * as cb from '@aws-cdk/aws-codebuild';
import { App, Construct, Stack, StackProps } from '@aws-cdk/core';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    new cb.Project(this, 'codebuildlab', {
      source: cb.Source.gitHub({
        repo: 'codebuild-hello', //replace to yours.
        owner: 'guan840912', //replace to yours.
        webhook: true,
      }),
      buildSpec: cb.BuildSpec.fromObject({
        version: '0.2',
        phases: {
          build: {
            commands: [
              'echo "Hello, CodeBuild!"',
              'cat aaa.txt',
            ],
          },
        },
      }),
    });
  }
}

const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();
new MyStack(app, 'codebuild-dev', { env: devEnv });
app.synth();