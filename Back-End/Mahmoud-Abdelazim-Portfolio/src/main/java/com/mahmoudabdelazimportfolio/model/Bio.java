package com.mahmoudabdelazimportfolio.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Bio {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    private String name;

    @Column(length = 1000)
    private String mainBio;

    @Column(length = 4000)
    private String detailedBio;
}
