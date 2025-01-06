import { OrderStatus } from '../types/order-status';
import { Subjects } from '../types/subjects';

export interface OrderCancelledEvent {
	subject: Subjects.OrderCancalled;
	data: {
		id: string;
		version: number;
		ticket: {
			id: string;
		};
	};
}
