const ADDRESS_LENGTH = 42;

export const addressWithDots = (address: string, startLength = 7): string => {
    if (startLength < ADDRESS_LENGTH) {
        const parts = [address.substring(0, startLength), address.substr(ADDRESS_LENGTH - 4)];
        return parts.join('...');
    }
    return address;
}
