import { flagEvaluationDemo } from './flag-evaluation-demo.js';
import { OpenFeature } from '@openfeature/js-sdk';
import { FlagdProvider } from '@openfeature/flagd-provider';
import { ClientHook } from './client-hook.js';

// When no provider is set, OpenFeature will no-op and return the default value passed to the evaluation API
OpenFeature.setProvider(new FlagdProvider({
  host: 'localhost',
  port: 8013,
}));

const client = OpenFeature.getClient('my-app');
client.addHooks(new ClientHook());

await flagEvaluationDemo(client);
