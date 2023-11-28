package com.b2b.backend.aspects;


import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Aspect
@Component
public class LoggingAspect {
    private final Logger LOGGER = LoggerFactory.getLogger(LoggingAspect.class.getName());

    @Pointcut("execution(* com.b2b.backend..*(..))")
    public void genericMethods() {
    }

    @Around("genericMethods()")
    public Object handleLogs(ProceedingJoinPoint proceedingJoinPoint) {
        Object output;
        LOGGER.info("Starting execution -> ".concat(proceedingJoinPoint.getTarget().getClass().toString()).concat(", Method: ".concat(proceedingJoinPoint.getSignature().getName())));
        try {
            output = proceedingJoinPoint.proceed();
        } catch (Throwable throwable) {
            throw new RuntimeException(throwable.getMessage());
        }
        LOGGER.info("Ending execution -> ".concat(proceedingJoinPoint.getTarget().getClass().toString()).concat(", Method: ".concat(proceedingJoinPoint.getSignature().getName())));
        return output;
    }

    @AfterThrowing(pointcut = "execution(* com.b2b.backend..*(..))", throwing = "throwable")
    public void doRecoverHandler(JoinPoint joinPoint, Throwable throwable) {
        LOGGER.error("Execution failed at Class: ".concat(joinPoint.getTarget().getClass().toString()).concat(", Method: ".concat(joinPoint.getSignature().getName()).concat(", with arguments: ".concat(Arrays.toString(joinPoint.getArgs())))));
        LOGGER.error("Execution Logs: ".concat(throwable.getMessage()));
    }
}
