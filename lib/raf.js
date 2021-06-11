import context from './context';
import { requestAnimationFrame, cancelAnimationFrame } from 'request-animation-frame-polyfill';

// re-assign
context.window.requestAnimationFrame = requestAnimationFrame;
context.window.cancelAnimationFrame = cancelAnimationFrame;

if (!('requestIdleCallback' in context.window)) {
  context.window.requestIdleCallback = context.window.requestAnimationFrame.bind(context.window);
}

if (!('cancelIdleCallback' in context.window)) {
  context.window.cancelIdleCallback = context.window.cancelAnimationFrame.bind(context.window);
}
