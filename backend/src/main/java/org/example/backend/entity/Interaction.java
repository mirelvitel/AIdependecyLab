package org.example.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "interaction")
public class Interaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long interactionId;

    @ManyToOne
    @JoinColumn(name = "exercise_id", nullable = false)
    private Exercise exercise;

    private LocalDateTime timestamp;
    private String actionType;

    @Column(columnDefinition = "TEXT")
    private String details;

    public Interaction() {
        this.timestamp = LocalDateTime.now();
    }
}
