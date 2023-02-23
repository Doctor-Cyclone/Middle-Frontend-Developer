interface TotalPrice {
	price: number;
	discount: number;
	isInstallment?: boolean;
	months?: number;
}

export const totalPrice = ({ price, discount, isInstallment, months = 12 }: TotalPrice): number => {
	if (isInstallment && months) {
		return (price - (price * (discount / 100))) / months
	}

	return price - (price * (discount / 100));
};