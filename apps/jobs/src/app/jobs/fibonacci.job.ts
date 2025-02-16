import { job } from '../decorators/job.decorator';
import { AbstractJob } from './abstract.job';

@job({
  name: 'Fibonacci',
  description: 'Generate a Fibonacci sequence and store it in the db.',
})
export class FibonacciJob extends AbstractJob {}
