import { View } from './index';
import { Negotiations } from './../models/index';

export class NegotiationsView extends View<Negotiations> {

    template(model: Negotiations): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                    ${model.getArray().map(negotiation => {
                        return `
                            <tr>
                                <td>${negotiation.date.getDate()}/${negotiation.date.getMonth() + 1}/${negotiation.date.getFullYear()}</td>
                                <td>${negotiation.amount}</td>
                                <td>${negotiation.value}</td>
                                <td>${negotiation.volume}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>

                <tfoot>
                </tfoot>
            </table>
        `;
    }
}