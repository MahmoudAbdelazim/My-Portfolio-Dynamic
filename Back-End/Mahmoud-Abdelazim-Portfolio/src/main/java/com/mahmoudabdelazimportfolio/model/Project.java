package com.mahmoudabdelazimportfolio.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    private String name;

    private String description;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Technology> technologies = new ArrayList<>();

    private String githubLink;

    private String projectLink;

    @Temporal(TemporalType.DATE)
    private Date date;
}
