package com.mahmoudabdelazimportfolio.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Social {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    private String name;

    private String link;

    private String logoLink;
}
