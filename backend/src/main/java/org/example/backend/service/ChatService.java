package org.example.backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Service
public class ChatService {

    @Value("${openai.api-key}")
    private String openaiApiKey;

    public String getChatReply(String message) {
        Map<String, Object> requestPayload = Map.of(
                "model", "gpt-4",
                "messages", new Object[]{
                        Map.of("role", "system", "content", "You are a helpful assistant."),
                        Map.of("role", "user", "content", message)
                }
        );

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(openaiApiKey);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestPayload, headers);

        RestTemplate restTemplate = new RestTemplate();
        String openaiUrl = "https://api.openai.com/v1/chat/completions";

        ResponseEntity<Map> responseEntity = restTemplate.exchange(openaiUrl, HttpMethod.POST, entity, Map.class);
        Map<String, Object> response = responseEntity.getBody();

        if (response != null && response.containsKey("choices")) {
            List<?> choices = (List<?>) response.get("choices");
            if (!choices.isEmpty()) {
                Map<String, Object> firstChoice = (Map<String, Object>) choices.get(0);
                Map<String, Object> messageMap = (Map<String, Object>) firstChoice.get("message");
                if (messageMap != null && messageMap.containsKey("content")) {
                    return messageMap.get("content").toString();
                }
            }
        }
        return "No reply";
    }
}
