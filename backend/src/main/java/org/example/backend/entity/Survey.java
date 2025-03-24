package org.example.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "survey")
public class Survey {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long surveyId;

    @ManyToOne
    @JoinColumn(name = "session_id", nullable = false)
    private Session session;

    private Integer overallImpact;
    private Integer conceptUnderstanding;
    private Integer skillBalance;
    private Integer confidenceChange;
    private Integer independentPreparedness;

    @Column(columnDefinition = "TEXT")
    private String additionalFeedback;
}

