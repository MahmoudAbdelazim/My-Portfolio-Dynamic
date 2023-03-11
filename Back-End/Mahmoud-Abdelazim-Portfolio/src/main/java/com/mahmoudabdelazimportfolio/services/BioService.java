package com.mahmoudabdelazimportfolio.services;

import com.mahmoudabdelazimportfolio.model.Bio;
import com.mahmoudabdelazimportfolio.respositories.BioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BioService {

    private final BioRepository bioRepository;

    @Autowired
    public BioService(BioRepository bioRepository) {
        this.bioRepository = bioRepository;
    }

    public Bio getBio() {
        List<Bio> bios = bioRepository.findAll();
        return bios.get(0);
    }

    public void updateBio(Bio bio) {
        bioRepository.deleteAll();
        bioRepository.saveAndFlush(bio);
    }
}
