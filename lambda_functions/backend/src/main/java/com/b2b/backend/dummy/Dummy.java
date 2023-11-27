package com.b2b.backend.dummy;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author Clinton Fernandes
 **/

@RestController
public class Dummy {

    @GetMapping("/dummy/{id}")
    public void dummy(@PathVariable String id) {
        System.out.println("Calling dummy ".concat(id));
        throw new RuntimeException();
    }
}
