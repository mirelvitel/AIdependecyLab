package org.example.backend.config;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EnvConfig {

    @Bean
    public Dotenv dotenv() {
        return Dotenv.load();
    }

    @Bean
    public String openAiApiKey(Dotenv dotenv) {
        return dotenv.get("OPENAI_API_KEY");
    }

    @Bean
    public String jdoodleClientId(Dotenv dotenv) {
        return dotenv.get("JDOODLE_CLIENT_ID");
    }

    @Bean
    public String jdoodleClientSecret(Dotenv dotenv) {
        return dotenv.get("JDOODLE_CLIENT_SECRET");
    }
}
