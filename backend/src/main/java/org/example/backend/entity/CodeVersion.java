package org.example.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "code_version")
public class CodeVersion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codeVersionId;

    @ManyToOne
    @JoinColumn(name = "exercise_id", nullable = false)
    private Exercise exercise;

    private LocalDateTime timestamp;

    @Column(columnDefinition="TEXT")
    private String code;

    @Column(columnDefinition="TEXT")
    private String diffWithPreviousVersion;


    public CodeVersion() {
        this.timestamp = LocalDateTime.now();
    }
}

