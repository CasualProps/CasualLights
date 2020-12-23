// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
import 'bootstrap';

var module = require('./modules/myModule');
console.log(module.getGreeting('Nader'));

console.log('test-something');