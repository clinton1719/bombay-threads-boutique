interface Item {
  category: string;
  uniqueId: string;
  title: string;
  subTitle: string;
  price: string;
}

interface ItemsList {
  list: Array<Item>;
  categories: Array<string>;
}

export type { Item, ItemsList };
