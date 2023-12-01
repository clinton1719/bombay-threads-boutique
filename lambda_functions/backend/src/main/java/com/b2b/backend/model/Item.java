package com.b2b.backend.model;

/**
 * @Author Clinton Fernandes
 **/
public class Item {
    Category category;
    SubCategory subCategory;
    String uniqueId;
    String name;
    String rating;
    String price;

    public Item(Category category, SubCategory subCategory, String uniqueId, String name, String rating, String price) {
        this.category = category;
        this.subCategory = subCategory;
        this.uniqueId = uniqueId;
        this.name = name;
        this.rating = rating;
        this.price = price;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public SubCategory getSubCategory() {
        return subCategory;
    }

    public void setSubCategory(SubCategory subCategory) {
        this.subCategory = subCategory;
    }

    public String getUniqueId() {
        return uniqueId;
    }

    public void setUniqueId(String uniqueId) {
        this.uniqueId = uniqueId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Item{" + "category='" + category + '\'' + ", subCategory='" + subCategory + '\'' + ", uniqueId='" + uniqueId + '\'' + ", name='" + name + '\'' + ", rating='" + rating + '\'' + ", price='" + price + '\'' + '}';
    }
}
