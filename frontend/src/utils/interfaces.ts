interface Item {
  category: string;
  uniqueId: string;
  name: string;
  rating: string;
  price: string;
}

interface ItemsList {
  list: Array<Item>;
  categories: Array<string>;
}

export type { Item, ItemsList };
