package com.b2b.backend.exceptions;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

/**
 * @Author Clinton Fernandes
 **/
@ControllerAdvice
public class GlobalExceptionController extends RuntimeException {

    @ExceptionHandler(value = {RuntimeException.class})
    public void exception() {
        System.out.println("Handles Exception and Returns Accordingly");
    }
}
