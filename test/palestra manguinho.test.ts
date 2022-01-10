import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as PalestraManguinho from '../lib/palestra manguinho-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new PalestraManguinho.PalestraManguinhoStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
