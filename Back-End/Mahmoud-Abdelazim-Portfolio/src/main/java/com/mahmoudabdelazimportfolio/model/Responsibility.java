package com.mahmoudabdelazimportfolio.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Responsibility {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(length = 1000)
    private String responsibility;
}
