import context from './context';
import * as raf from 'raf';

raf.polyfill(context.window);

if (!('requestIdleCallback' in context.window)) {
  context.window.requestIdleCallback = context.window.requestAnimationFrame.bind(context.window);
}

if (!('cancelIdleCallback' in context.window)) {
  context.window.cancelIdleCallback = context.window.cancelAnimationFrame.bind(context.window);
}
