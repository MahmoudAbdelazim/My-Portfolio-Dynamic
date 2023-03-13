package com.mahmoudabdelazimportfolio.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class About {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(length = 4000)
    private String aboutText;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Technology> technologies = new ArrayList<>();
}
