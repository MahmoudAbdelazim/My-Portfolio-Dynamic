package com.mahmoudabdelazimportfolio.services;

import com.mahmoudabdelazimportfolio.model.Experience;
import com.mahmoudabdelazimportfolio.respositories.ExperienceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExperienceService {

    private final ExperienceRepository experienceRepository;

    @Autowired
    public ExperienceService(ExperienceRepository experienceRepository) {
        this.experienceRepository = experienceRepository;
    }

    public List<Experience> getExperiences() {
        return experienceRepository.findByOrderByDateToDesc();
    }

    public void addExperience(Experience experience) {
        experienceRepository.save(experience);
    }

    public void deleteExperience(Experience experience) {
        experienceRepository.delete(experience);
    }

    public void updateExperience(Experience experience) {
        Optional<Experience> orig = experienceRepository.findById(experience.getId());
        if (orig.isPresent()) {
            Experience origExperience = orig.get();
            origExperience.setCompanyName(experience.getCompanyName());
            origExperience.setCompanyLink(experience.getCompanyLink());
            origExperience.setTitle(experience.getTitle());
            origExperience.setDateFrom(experience.getDateFrom());
            origExperience.setDateTo(experience.getDateTo());
            origExperience.setResponsibilities(experience.getResponsibilities());
            experienceRepository.saveAndFlush(origExperience);
        }
    }
}