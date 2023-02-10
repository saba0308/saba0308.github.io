export interface productData{
    id:number;
    productCode:string;
    productName:string;
    productPrice:number;
    productCategory:string;
    productDescription:string;
    productImage:any;
    productQuantity:number;
    productStatus:string;
    productOffer:string;
}
export interface cartProduct{
        id:number;
        productCode:string;
        productName:string;
        productPrice:number;
        productCategory:string;
        productDescription:string;
        productImage:any;
        productStatus:string;
        productOffer:string;
        quantity:number; 
        qtyTotal:number;
        subTotal:number;
}
export interface orderHistory{
    email:string;
    orders:cartProduct;
}
export interface order{
    id:number;
    orderCode:string;
    email:string;
    orderDate:Date;
    address:string;
    total:number;
}