import { template } from './template';
import './styles/main.scss';


document.querySelector('h1').textContent = template(`content goes here`);