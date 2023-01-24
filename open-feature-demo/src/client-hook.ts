import { EvaluationDetails, FlagValue, Hook, HookContext } from '@openfeature/js-sdk';
import * as util from 'util';

export class ClientHook implements Hook {
  before(hookContext: HookContext) {
    console.log(`[hook] Evaluating flag ${hookContext.flagKey} in context ${util.inspect(hookContext.context)}`);
    // code to run before flag evaluation
    // can be used to mutate context
  }

  after(hookContext: HookContext, evaluationDetails: EvaluationDetails<FlagValue>) {
    console.log(`[hook] Evaluation result for flag ${hookContext.flagKey} is ${evaluationDetails.value}`);
    // code to run after successful flag evaluation
  }

  error(hookContext: HookContext, err: Error) {
    // code to run if there's an error during before hooks or during flag evaluation
  }

  finally(hookContext: HookContext) {
    // code to run after all other stages, regardless of success/failure
  }
}
