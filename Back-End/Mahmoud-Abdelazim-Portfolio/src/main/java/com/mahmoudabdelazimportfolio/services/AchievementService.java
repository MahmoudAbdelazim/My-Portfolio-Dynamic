package com.mahmoudabdelazimportfolio.services;

import com.mahmoudabdelazimportfolio.model.Achievement;
import com.mahmoudabdelazimportfolio.respositories.AchievementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AchievementService {

    private final AchievementRepository achievementRepository;

    @Autowired
    public AchievementService(AchievementRepository achievementRepository) {
        this.achievementRepository = achievementRepository;
    }

    public List<Achievement> getAchievements() {
        return achievementRepository.findByOrderByDateDesc();
    }

    public void addAchievement(Achievement achievement) {
        achievementRepository.saveAndFlush(achievement);
    }

    public void deleteAchievement(Achievement achievement) {
        achievementRepository.delete(achievement);
    }
}
