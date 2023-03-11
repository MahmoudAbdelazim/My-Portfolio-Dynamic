package com.mahmoudabdelazimportfolio.services;

import com.mahmoudabdelazimportfolio.model.Project;
import com.mahmoudabdelazimportfolio.respositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    @Autowired
    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> getProjects() {
        return projectRepository.findAll();
    }

    public void addProject(Project project) {
        projectRepository.save(project);
    }

    public void deleteProject(Project project) {
        projectRepository.delete(project);
    }

    public void updateProject(Project project) {
        Optional<Project> orig = projectRepository.findById(project.getId());
        if (orig.isPresent()) {
            Project origProject = orig.get();
            origProject.setName(project.getName());
            origProject.setDescription(project.getDescription());
            origProject.setTechnologies(project.getTechnologies());
            origProject.setGithubLink(project.getGithubLink());
            origProject.setProjectLink(project.getProjectLink());
            origProject.setDate(project.getDate());
            projectRepository.saveAndFlush(origProject);
        }
    }
}
