package com.mahmoudabdelazimportfolio.controllers;

import com.mahmoudabdelazimportfolio.model.Project;
import com.mahmoudabdelazimportfolio.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/project")
public class ProjectController {

    private final ProjectService projectService;

    @Autowired
    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping
    public ResponseEntity<List<Project>> getProjects() {
        return ResponseEntity.ok(projectService.getProjects());
    }

    @PostMapping
    public ResponseEntity<Boolean> addProject(@RequestBody Project project) {
        projectService.addProject(project);
        return ResponseEntity.ok(true);
    }

    @DeleteMapping
    public ResponseEntity<Boolean> deleteProject(@RequestBody Project project) {
        projectService.deleteProject(project);
        return ResponseEntity.ok(true);
    }

    @PutMapping
    public ResponseEntity<Boolean> updateProject(@RequestBody Project project) {
        projectService.updateProject(project);
        return ResponseEntity.ok(true);
    }
}
