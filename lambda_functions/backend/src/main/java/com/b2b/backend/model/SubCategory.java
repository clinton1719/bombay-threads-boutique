package com.b2b.backend.model;

/**
 * @Author Clinton Fernandes
 **/
public class SubCategory {
    String name;

    public SubCategory(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "SubCategory{" +
                "name='" + name + '\'' +
                '}';
    }
}
