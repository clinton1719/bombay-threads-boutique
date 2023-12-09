package com.crochet.backend.model;

/**
 * @author Clinton Fernandes
 */
public class Item {
    private Category category;
    private SubCategory subCategory;
    private String uniqueId;
    private String name;
    private String price;
    private String rating;

    public Item() {
    }

    public Item(Category category, SubCategory subCategory, String uniqueId, String name, String price, String rating) {
        this.category = category;
        this.subCategory = subCategory;
        this.uniqueId = uniqueId;
        this.name = name;
        this.price = price;
        this.rating = rating;
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

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    @Override
    public String toString() {
        return "Item{" +
                "category=" + category +
                ", subCategory=" + subCategory +
                ", uniqueId='" + uniqueId + '\'' +
                ", name='" + name + '\'' +
                ", price='" + price + '\'' +
                ", rating='" + rating + '\'' +
                '}';
    }
}
