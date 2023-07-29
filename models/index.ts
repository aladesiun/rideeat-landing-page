export interface VendorDetailsType {
    businessInfo: BusinessInfoType,
    sellerInfo: SellerInfoType,
    brandType: Array<string>,
    docs: VendorDocType
}
export interface RiderDetailsType {
    contact: RiderContact,
    address: { city: Number, lga: [] },
    docs: VendorDocType
}


export interface InputDetails {
    type: string,
    placeholder: string
}
export interface Address {
    address: string | null
    city: string | null,
    town: string | [] | null,
    area: string | []
}

export interface BusinessInfoType {
    address: Address,
    contact: Contact,
    businessType: []
}

interface Contact {
    email: string,
    phone: string,
    storeName: string
}
interface RiderContact {
    email: string,
    firstName: string,
    lastName: string,
    phone: number
}
export interface SellerInfoType {
    firstName: string,
    lastName: string,
    phone: string | number
}

export interface VendorDocType {
    incorporation: string,
    idCard: string,
    taxIn: string
}
export interface RiderDocType {
    incorporation: string,
    idCard: string,
    taxIn: string
}
export interface BusinessAndBrandType {

    business_types: [BusinessType],
    brand_types: [BrandType],
}
interface BusinessType {
    id: string | number,
    title: string
}
interface BrandType {
    id: string | number,
    title: string
}
export interface NotificationType {
    notification: Notification
}
export interface Notification {
    type: number,
    message: string,
    time: number
}

export interface AreasType {
    id: number;
    publish: number;
    states: State[];
    title: string;
}

export interface State {
    country_id: number;
    created_at: string;
    id: number;
    publish: number;
    title: string;
    towns: Town[];
    // ...
};
export interface Town {
    id: number;
    town_id: number;
    title: string;
    publish: number;
    created_at: string;
    areas:AreaType[];
}
export interface AreaType{
    created_at: string;
    id: number;
    publish: number;
    title: string;
    town_id: number;
    updated_at: string;
}
