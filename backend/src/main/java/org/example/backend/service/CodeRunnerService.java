package org.example.backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
public class CodeRunnerService {

    private final LoggerService loggerService;

    public CodeRunnerService(LoggerService loggerService) {
        this.loggerService = loggerService;
    }

    @Value("${jdoodle.client-id}")
    private String jdoodleClientId;

    @Value("${jdoodle.client-secret}")
    private String jdoodleClientSecret;

    public Map<String, Object> runCode(String language, String code) {
        String jdoodleLanguage = mapToJDoodleLang(language);

        Map<String, Object> jdoodleRequest = Map.of(
                    "script", code,
                    "language", jdoodleLanguage,
                    "versionIndex", "0",
                    "clientId", jdoodleClientId,
                    "clientSecret", jdoodleClientSecret
            );

        RestTemplate restTemplate = new RestTemplate();
        String jDoodleUrl = "https://api.jdoodle.com/v1/execute";
        return restTemplate.postForObject(jDoodleUrl, jdoodleRequest, Map.class);
    }

    private String mapToJDoodleLang(String lang) {
        return switch (lang) {
            case "java" -> "java";
            case "python" -> "python3";
            case "csharp" -> "csharp";
            case "cpp" -> "cpp17";
            default -> "java"; // fallback
        };
    }
}
