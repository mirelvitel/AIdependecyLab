package org.example.backend.controller;

import org.example.backend.service.CodeRunnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class CodeRunnerController {

    private final CodeRunnerService codeRunnerService;

    @Autowired
    public CodeRunnerController(CodeRunnerService codeRunnerService) {
        this.codeRunnerService = codeRunnerService;
    }

    @PostMapping("/run")
    public ResponseEntity<Map<String, Object>> runCode(@RequestBody Map<String, String> payload) {
        String language = payload.get("language");
        String code = payload.get("code");

        Map<String, Object> jdoodleResponse = codeRunnerService.runCode(language, code);
        return ResponseEntity.ok(jdoodleResponse);
    }
}
