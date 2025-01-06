import { OrderStatus } from '../types/order-status';
import { Subjects } from '../types/subjects';

export interface OrderCreatedEvent {
	subject: Subjects.OrderCreated;
	data: {
		id: string;
		status: OrderStatus;
		userId: string;
		expiresAt: string;
		version: number;
		ticket: {
			id: string;
			price: number;
		};
	};
}
