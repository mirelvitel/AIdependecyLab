package org.example.backend.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class LoggerService {

    private final Logger logger = LoggerFactory.getLogger(LoggerService.class);

    public void logInfo(String message) {
        logger.info(message);
    }

    public void logWarn(String message) {
        logger.warn(message);
    }

    public void logError(String message, Throwable ex) {
        logger.error(message, ex);
    }

    public void logDebug(String message) {
        logger.debug(message);
    }
}
