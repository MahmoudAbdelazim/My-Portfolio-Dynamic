package com.mahmoudabdelazimportfolio.controllers;

import com.mahmoudabdelazimportfolio.model.Achievement;
import com.mahmoudabdelazimportfolio.services.AchievementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/achievement")
public class AchievementController {

    private final AchievementService achievementService;

    @Autowired
    public AchievementController(AchievementService achievementService) {
        this.achievementService = achievementService;
    }

    @GetMapping
    public ResponseEntity<List<Achievement>> getAchievements() {
        return ResponseEntity.ok().body(achievementService.getAchievements());
    }

    @PostMapping
    public ResponseEntity<Boolean> addAchievement(@RequestBody Achievement achievement) {
        achievementService.addAchievement(achievement);
        return ResponseEntity.ok(true);
    }

    @DeleteMapping
    public ResponseEntity<Boolean> deleteAchievement(@RequestBody Achievement achievement) {
        achievementService.deleteAchievement(achievement);
        return ResponseEntity.ok(true);
    }
}
