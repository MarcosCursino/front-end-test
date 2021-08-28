export interface ParamsProps {
  id: string;
}

export interface ItemsProps {
  name: string;
  qty: number;
  price: number;
}

export interface OrderItemProps {
  id: number;
  name: string;
  payment_method : string;
  total: string;
  status: string;
  items: ItemsProps[];
  freight: {
    price: string
    from: number;
    to: number;
  }
  address: {
    street: string;
    number: number;
    city: string;
    state: string;
    postcode: string;
  }
}
