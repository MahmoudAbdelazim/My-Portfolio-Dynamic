package com.mahmoudabdelazimportfolio.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
public class Experience {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    private String companyName;

    private String companyLink;

    private String title;

    @Temporal(TemporalType.DATE)
    private Date dateFrom;

    @Temporal(TemporalType.DATE)
    private Date dateTo;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Responsibility> responsibilities = new ArrayList<>();
}
