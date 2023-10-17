# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

-   `npm run build` compile typescript to js
-   `npm run watch` watch for changes and compile
-   `npm run test` perform the jest unit tests
-   `cdk deploy` deploy this stack to your default AWS account/region
-   `cdk diff` compare deployed stack with current state
-   `cdk synth` emits the synthesized CloudFormation template

## Getting Started with AWS CDK

1. install `AWS CDK CLI`.

Install the aws-cdk package globally.

```
npm install -g aws-cdk
```

2. Verify Installation.

    Confirm the CDK CLI is installed by checking its version.

```
cdk --version
```

3. Initialize a New CDK App

Create a new CDK app using Typescript.

```
cdk init app --language=typescript
```

4. Synthesize CloudFormation Template.

Convert your CDK app to a CloudFormation stack and verify the output.

```
cdk synth
```

5. Deploy the Stack.

Deploy your CloudFormation stack to your AWS account.

```
cdk deploy
```

6. Additional CLI Commands.

-   Delete your Stack

```
cdk destroy
```

-   Specify a particular stack to delete.

```
cdk destroy StackName
```

-   Delete all stacks (if your app includes multiple stacks)

```
cdk destroy --all
```

-   Deploy a specific stack

```
cdk deploy StackName
```

-   Deploy all stacks

```
cdk deploy --all
```
