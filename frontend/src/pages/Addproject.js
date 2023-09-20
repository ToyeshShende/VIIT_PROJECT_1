import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { TagsInput } from "react-tag-input-component";


export default function AddProjectForm() {
  const [formData, setFormData] = useState({
    projectTitle: '',
    problemStatement: '',
    techStack: '',
    groupMembers: '',
    facultyName: '',
    githubLink: '',
    tags: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleTagsChange = (tags) => {
    setFormData({ ...formData, tags });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    // Handle file input, e.g., storing the file data
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending data to the server
    console.log(formData);
  };
  const [selected, setSelected] = useState([]);
  return (
    <Form onSubmit={handleSubmit} className="add-project-form">
      <Form.Group controlId="projectTitle">
        <Form.Label>Project Title</Form.Label>
        <Form.Control
          type="text"
          name="projectTitle"
          value={formData.projectTitle}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="problemStatement">
        <Form.Label>Problem Statement</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          name="problemStatement"
          value={formData.problemStatement}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="techStack">
        <Form.Label>Tech Stack</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          name="techStack"
          value={formData.techStack}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="groupMembers">
        <Form.Label>Group Members</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          name="groupMembers"
          value={formData.groupMembers}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="facultyName">
        <Form.Label>Faculty Name</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          name="facultyName"
          value={formData.facultyName}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      
     

      <Form.Group controlId="githubLink">
        <Form.Label>Github Link</Form.Label>
        <Form.Control
          type="url"
          name="githubLink"
          value={formData.githubLink}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="srsDocx">
        <Form.Label>SRS Document (Docx)</Form.Label>
        <Form.Control
          type="file"
          name="srsDocx"
          accept=".docx"
          onChange={handleFileChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="projectVideo">
        <Form.Label>Project Video (Max 10MB)</Form.Label>
        <Form.Control
          type="file"
          name="projectVideo"
          accept=".mp4, .avi, .mkv"
          onChange={handleFileChange}
          required
        />
      </Form.Group>
      <em>Enter tags</em>
      <TagsInput
        value={selected}
        onChange={setSelected}
        name="fruits"
        placeHolder="enter fruits"
      />
      <em>press enter to add new tag</em>
      <br></br>
      <br></br>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

