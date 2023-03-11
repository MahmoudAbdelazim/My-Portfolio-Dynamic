package com.mahmoudabdelazimportfolio.controllers;

import com.mahmoudabdelazimportfolio.model.Bio;
import com.mahmoudabdelazimportfolio.services.BioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/bio")
public class BioController {

    private final BioService bioService;

    @Autowired
    public BioController(BioService bioService) {
        this.bioService = bioService;
    }

    @GetMapping
    public ResponseEntity<Bio> getBio() {
        return ResponseEntity.ok(bioService.getBio());
    }

    @PostMapping
    public ResponseEntity<Boolean> updateBio(@RequestBody Bio bio) {
        bioService.updateBio(bio);
        return ResponseEntity.ok(true);
    }
}
