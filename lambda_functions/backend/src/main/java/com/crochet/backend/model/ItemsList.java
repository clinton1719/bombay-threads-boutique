package com.crochet.backend.model;

import java.util.List;
import java.util.Map;

/**
 * @author Clinton Fernandes
 */
public class ItemsList {

    private List<Item> list;
    private List<String> categories;
    private List<String> subCategories;
    private Map<String, List<String>> categoryMap;

    public ItemsList() {
    }

    public ItemsList(List<Item> list, List<String> categories, List<String> subCategories, Map<String, List<String>> categoryMap) {
        this.list = list;
        this.categories = categories;
        this.subCategories = subCategories;
        this.categoryMap = categoryMap;
    }

    public List<Item> getList() {
        return list;
    }

    public void setList(List<Item> list) {
        this.list = list;
    }

    public List<String> getCategories() {
        return categories;
    }

    public void setCategories(List<String> categories) {
        this.categories = categories;
    }

    public List<String> getSubCategories() {
        return subCategories;
    }

    public void setSubCategories(List<String> subCategories) {
        this.subCategories = subCategories;
    }

    public Map<String, List<String>> getCategoryMap() {
        return categoryMap;
    }

    public void setCategoryMap(Map<String, List<String>> categoryMap) {
        this.categoryMap = categoryMap;
    }

    @Override
    public String toString() {
        return "ItemsList{" +
                "list=" + list +
                ", categories=" + categories +
                ", subCategories=" + subCategories +
                ", categoryMap=" + categoryMap +
                '}';
    }
}
