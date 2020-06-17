export interface ISupplier {
    id: number;
    name: string;
    addressId: number;
    addressName: string;
}

export interface IProduct {
    id: number;
    sku: string;
    name: string;
    description: string;
    supplierId: number;
    supplierName: string;
}

export interface IAddress {
    id: number;
    name: string;
}