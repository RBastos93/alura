import { NegotiationController } from './controllers/NegotiationController';

const controller = new NegotiationController();

// using Jquery
$('.form').submit(controller.add.bind(controller));