import { HelloWorld } from './components/hello-world/hello-world.js';

console.log(HelloWorld);

customElements.define('hello-world', HelloWorld);

console.log(_.add(1, 2));
