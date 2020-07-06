import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as DiscordExecutioner from '../lib/discord-executioner-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new DiscordExecutioner.DiscordExecutionerStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
