import { OrderStatus } from '../types/order-status';
import { Subjects } from '../types/subjects';

export interface OrderCancelledEvent {
	subject: Subjects.OrderCancalled;
	data: {
		id: string;
		ticket: {
			id: string;
		};
	};
}
