"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("lodash"));
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
