package com.mahmoudabdelazimportfolio.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.Cascade;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class About {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    private String aboutText;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Technology> technologies = new ArrayList<>();
}
