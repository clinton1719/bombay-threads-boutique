package com.crochet.backend;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

@QuarkusTest
class BackendControllerTest {
    @Test
    void testHelloEndpoint() {
        System.out.println("Testing");
    }

}