package org.example.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "exercise")
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long exerciseId;

    @ManyToOne
    @JoinColumn(name = "session_id", nullable = false)
    private Session session;

    private Integer taskNumber;
    private Boolean isAIEnabled;
    private Boolean completed;
    private Integer completionTime;
    private Boolean success;
}
