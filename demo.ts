import * as _ from 'lodash';

const tasks = [
  { title: 'Review project feedback', done: false, priority: 'medium' },
  { title: 'Prepare presentation', done: true, priority: 'high' },
  { title: 'Write documentation', done: false, priority: 'medium' },
  { title: 'Respond to emails', done: false, priority: 'high' },
  { title: 'Push updated code to GitHub', done: false, priority: 'medium' },
];

// find: first high-priority task that's pending 
const nextUrgentTask = _.find(tasks, task => !task.done && task.priority === 'high');
console.log('Next high-priority task to do:', nextUrgentTask);

// find: first medium-priority task that's pending
const nextMediumTask = _.find(tasks, task => !task.done && task.priority === 'medium');
console.log('Next medium-priority task to do:', nextMediumTask);

// filter: all completed tasks
const completedTasks = _.filter(tasks, { done: true });
console.log('Completed tasks:', completedTasks);

// filter: all pending tasks
const pendingTasks = _.filter(tasks, { done: false });
console.log('Pending tasks:', pendingTasks);
