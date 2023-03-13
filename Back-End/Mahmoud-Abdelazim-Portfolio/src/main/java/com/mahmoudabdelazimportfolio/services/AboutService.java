package com.mahmoudabdelazimportfolio.services;

import com.mahmoudabdelazimportfolio.model.About;
import com.mahmoudabdelazimportfolio.model.Technology;
import com.mahmoudabdelazimportfolio.respositories.AboutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AboutService {
    private final AboutRepository aboutRepository;

    @Autowired
    public AboutService(AboutRepository aboutRepository) {
        this.aboutRepository = aboutRepository;
    }

    public About getAbout() {
        List<About> abouts = aboutRepository.findAll();
        return abouts.get(0);
    }

    public void updateAbout(About about) {
        List<About> abouts = aboutRepository.findAll();
        if (abouts.isEmpty()) {
            aboutRepository.saveAndFlush(about);
            return;
        }
        About origAbout = abouts.get(0);
        origAbout.setAboutText(about.getAboutText());
        origAbout.setTechnologies(about.getTechnologies());
        aboutRepository.saveAndFlush(origAbout);
    }
}
