package com.mahmoudabdelazimportfolio.services;

import com.mahmoudabdelazimportfolio.model.Social;
import com.mahmoudabdelazimportfolio.respositories.SocialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SocialService {

    private final SocialRepository socialRepository;

    @Autowired
    public SocialService(SocialRepository socialRepository) {
        this.socialRepository = socialRepository;
    }

    public List<Social> getSocial() {
        return socialRepository.findAll();
    }

    public void addSocial(Social social) {
        socialRepository.save(social);
    }

    public void deleteSocial(Social social) {
        socialRepository.delete(social);
    }

    public void updateSocial(Social social) {
        Optional<Social> orig = socialRepository.findById(social.getId());
        if (orig.isPresent()) {
            Social origSocial = orig.get();
            origSocial.setName(social.getName());
            origSocial.setLink(social.getLink());
            origSocial.setLogoLink(social.getLogoLink());
            socialRepository.saveAndFlush(origSocial);
        }
    }
}
