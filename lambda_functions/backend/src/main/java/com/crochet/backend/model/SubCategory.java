package com.crochet.backend.model;

/**
 * @author Clinton Fernandes
 */

public class SubCategory {

    private String name;

    public SubCategory() {
    }

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
