package com.mahmoudabdelazimportfolio.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
public class Achievement {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    private String achievement;

    @Temporal(TemporalType.DATE)
    private Date date;
}
