import { NegotiationController } from './controllers/index';

const controller = new NegotiationController();

// using Jquery
$('.form').submit(controller.add.bind(controller));