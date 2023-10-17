import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
// import * as lambda from 'aws-cdk-lib/aws-lambda';
// import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
// import * as apigateway from 'aws-cdk-lib/aws-apigateway';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
// import * as sns from 'aws-cdk-lib/aws-sns';
import { App, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

// exportしたクラスは、cdk.jsonのappに指定したファイルである"bin/cdk.ts"でインポートされ、インスタンス化される
export class CdkStackBucket extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // S3バケットを作成する
    const bucket = new s3.Bucket(this, 'MyBucket')
    console.log(bucket)
  }
}

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // CDKでは、AWSのリソースはクラスとして提供される
    // インスタンス化することで、CloudFormationのテンプレートを生成する
    new s3.Bucket(this, 'MyFirstBucket', {
      bucketName: 'my-first-bucket-2023-1234', // バケット名
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL, // 全てのパブリックアクセスをブロック
      encryption: s3.BucketEncryption.S3_MANAGED, // s3管理の暗号化を有効にする
      enforceSSL: true, // SSLを強制する
      versioned: true, // オブジェクトのバージョニングを有効にする
      autoDeleteObjects: true, // スタック削除時のオブジェクトの自動削除
      removalPolicy: cdk.RemovalPolicy.DESTROY, // スタック削除時にバケットを自動で削除する
    });

    // EC2インスタンスを作成する
    // 指定したVPC内に作成される
    // インスタンスタイプはt3.nano
    new ec2.Instance(this, 'MyFirstInstance', {
      // vpcを作成する
      // 最大2つのAZを利用する
      // NATゲートウェイを1つ作成する
      vpc: new ec2.Vpc(this, 'MyFirstVpc', {
        maxAzs: 2,
        natGateways: 1,
      }),
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.NANO),
      machineImage: ec2.MachineImage.latestAmazonLinux()
    });
  }
}
