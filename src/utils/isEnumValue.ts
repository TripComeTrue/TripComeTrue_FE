function isEnumValue<T extends Record<string | number, string | number>>(
	enumType: T,
	value: unknown,
): value is T[keyof T] {
	if (typeof value === 'string' || typeof value === 'number') {
		return Object.values(enumType).includes(value);
	}
	return false;
}

export default isEnumValue;
