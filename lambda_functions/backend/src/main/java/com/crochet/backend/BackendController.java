package com.crochet.backend;

import com.crochet.backend.model.Category;
import com.crochet.backend.model.Item;
import com.crochet.backend.model.ItemsList;
import com.crochet.backend.model.SubCategory;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

import java.util.*;

@Path("/api/v1")
public class BackendController {

    @GET
    @Path("/shopping/getAllItems")
    @Produces(MediaType.APPLICATION_JSON)
    public String getAllItems() throws JsonProcessingException {
        Category cat1 = new Category("Men");
        Category cat2 = new Category("Women");
        Category cat3 = new Category("Decor");

        SubCategory subCat1 = new SubCategory("Shirts");
        SubCategory subCat2 = new SubCategory("Pants");
        SubCategory subCat3 = new SubCategory("Curtains");
        SubCategory subCat4 = new SubCategory("Saree");

        Item item1 = new Item(cat1, subCat1, String.valueOf(UUID.randomUUID()), "Red Shirt", "2000", "⭐⭐⭐");
        Item item2 = new Item(cat1, subCat2, String.valueOf(UUID.randomUUID()), "Black Jeans", "3000", "⭐⭐⭐⭐");
        Item item3 = new Item(cat3, subCat3, String.valueOf(UUID.randomUUID()), "Big Curtains", "10000", "⭐");
        Item item4 = new Item(cat2, subCat4, String.valueOf(UUID.randomUUID()), "White Saree and Blouse", "3000", "⭐⭐⭐⭐⭐");

        List<Item> list = new ArrayList<>(4);
        list.add(item1);
        list.add(item2);
        list.add(item3);
        list.add(item4);

        List<String> categories = new ArrayList<>(3);
        categories.add(cat1.getName());
        categories.add(cat2.getName());
        categories.add(cat3.getName());

        List<String> subCategories = new ArrayList<>(3);
        subCategories.add(subCat1.getName());
        subCategories.add(subCat2.getName());
        subCategories.add(subCat3.getName());
        subCategories.add(subCat4.getName());

        Map<String, List<String>> categoryMap = new HashMap<>();
        categoryMap.put(cat1.getName(), new ArrayList<>(Arrays.asList(subCat1.getName(), subCat2.getName())));
        categoryMap.put(cat2.getName(), new ArrayList<>(List.of(subCat4.getName())));
        categoryMap.put(cat3.getName(), new ArrayList<>(List.of(subCat3.getName())));

        ItemsList itemsList = new ItemsList(list, categories, subCategories,categoryMap);

        ObjectMapper mapper = new ObjectMapper();

        String a = mapper.writeValueAsString(itemsList);

        return a;
    }
}
