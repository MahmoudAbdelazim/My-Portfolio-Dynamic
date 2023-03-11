package com.mahmoudabdelazimportfolio.controllers;

import com.mahmoudabdelazimportfolio.model.Experience;
import com.mahmoudabdelazimportfolio.services.ExperienceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/experience")
public class ExperienceController {

    private final ExperienceService experienceService;

    @Autowired
    public ExperienceController(ExperienceService experienceService) {
        this.experienceService = experienceService;
    }

    @GetMapping
    public ResponseEntity<List<Experience>> getExperiences() {
        return ResponseEntity.ok(experienceService.getExperiences());
    }

    @PostMapping
    public ResponseEntity<Boolean> addExperience(@RequestBody Experience experience) {
        experienceService.addExperience(experience);
        return ResponseEntity.ok(true);
    }

    @DeleteMapping
    public ResponseEntity<Boolean> deleteExperience(@RequestBody Experience experience) {
        experienceService.deleteExperience(experience);
        return ResponseEntity.ok(true);
    }

    @PutMapping
    public ResponseEntity<Boolean> updateExperience(@RequestBody Experience experience) {
        experienceService.updateExperience(experience);
        return ResponseEntity.ok(true);
    }
}
