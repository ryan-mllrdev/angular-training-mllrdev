export interface IProduct {
    id: number;
    sku: string;
    name: string;
    description: string;
    supplierId: number;
}

export interface ISupplier {
    id: number;
    name: string;
    addressId: number;
}

export interface IAddress {
    id: number;
    name: string;
}