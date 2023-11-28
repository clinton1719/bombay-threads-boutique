package com.b2b.backend.controller;

import com.b2b.backend.model.Item;
import com.b2b.backend.model.ItemsList;
import com.b2b.backend.utils.Utility;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

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
        Item item1 = new Item("Men", Utility.getUUID(), "Shirt", "⭐⭐⭐⭐", "2500");
        Item item2 = new Item("Men", Utility.getUUID(), "Pants", "⭐⭐⭐", "3500");
        Item item3 = new Item("Women", Utility.getUUID(), "Saree", "⭐", "10000");
        Item item4 = new Item("Decor", Utility.getUUID(), "Curtains", "⭐⭐⭐⭐", "25000");

        itemsList.add(item1);
        itemsList.add(item2);
        itemsList.add(item3);
        itemsList.add(item4);

        return new ItemsList(itemsList, new ArrayList<>(Arrays.asList("Men", "Women", "Kids", "Accessories", "Decor", "Linens", "Bestselling")));
    }
}
