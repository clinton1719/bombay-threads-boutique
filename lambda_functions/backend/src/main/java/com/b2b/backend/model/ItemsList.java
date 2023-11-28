package com.b2b.backend.model;

import java.util.List;

/**
 * @Author Clinton Fernandes
 **/
public class ItemsList {
    List<Item> list;
    List<String> categories;

    public ItemsList(List<Item> list, List<String> categories) {
        this.list = list;
        this.categories = categories;
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

    @Override
    public String toString() {
        return "ItemsList{" +
                "list=" + list +
                ", categories=" + categories +
                '}';
    }
}
