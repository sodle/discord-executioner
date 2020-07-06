#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { DiscordExecutionerStack } from '../lib/discord-executioner-stack';

const app = new cdk.App();
new DiscordExecutionerStack(app, 'DiscordExecutionerStack');
