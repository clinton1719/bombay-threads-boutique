interface Category {
  name: string;
}

interface SubCategory {
  name: string;
}

interface Item {
  category: Category;
  subCategory: SubCategory;
  uniqueId: string;
  name: string;
  rating: string;
  price: string;
}

interface ItemsList {
  list: Array<Item>;
  categories: Array<string>;
  subCategories: Array<string>;
  categoryMap: { [key: string]: Array<string> };
}

export type { Item, ItemsList, Category, SubCategory };
