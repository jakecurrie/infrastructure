#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { StaticSiteStack } from '../lib/infrastructure-stack';
import * as dotenv from 'dotenv';

dotenv.config();

const app = new cdk.App();
new StaticSiteStack(app, 'StaticSiteStack', {
  env: { 
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});