package com.b2b.backend.controller;

import com.b2b.backend.model.Category;
import com.b2b.backend.model.Item;
import com.b2b.backend.model.ItemsList;
import com.b2b.backend.model.SubCategory;
import com.b2b.backend.utils.Utility;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

/**
 * @Author Clinton Fernandes
 **/
@RestController
@RequestMapping("/shopping")
@CrossOrigin(origins = {"*"})
public class ShoppingController {

    @GetMapping("/getAllItems")
    public ItemsList getDummyList() {
        List<Item> itemsList = new ArrayList<>();
        Category category1 = new Category("MEN");
        Category category2 = new Category("WOMEN");
        Category category3 = new Category("DECOR");
        SubCategory subCat1 = new SubCategory("Shirts");
        SubCategory subCat2 = new SubCategory("Pants");
        SubCategory subCat3 = new SubCategory("Cardigans");
        SubCategory subCat4 = new SubCategory("Mobile Cover");

        Item item1 = new Item(category1, subCat1, Utility.getUUID(), "Formal Shirt", "⭐⭐⭐⭐", "2500");
        Item item2 = new Item(category1, subCat2, Utility.getUUID(), "Fitted Pants", "⭐⭐⭐", "3500");
        Item item3 = new Item(category2, subCat3, Utility.getUUID(), "Red Stylish Cardigan", "⭐", "10000");
        Item item4 = new Item(category3, subCat4, Utility.getUUID(), "Green Mobile Cover", "⭐⭐⭐⭐", "25000");

        itemsList.add(item1);
        itemsList.add(item2);
        itemsList.add(item3);
        itemsList.add(item4);

        List<String> categories = new ArrayList<>(Arrays.asList(category1.getName(), category2.getName(), category3.getName()));
        List<String> subCategories = new ArrayList<>(Arrays.asList(subCat1.getName(), subCat2.getName(), subCat3.getName(), subCat4.getName()));
        Map<String, List<String>> categoryMap = new HashMap<>();
        categoryMap.put(category1.getName(), new ArrayList<>(Arrays.asList(subCat1.getName(), subCat2.getName())));
        categoryMap.put(category2.getName(), new ArrayList<>(List.of(subCat3.getName())));
        categoryMap.put(category3.getName(), new ArrayList<>(List.of(subCat4.getName())));

        return new ItemsList(itemsList, categories, subCategories, categoryMap);
    }
}
