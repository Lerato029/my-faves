/* =================================================================The Collections Component======================================================= */
/* import statement to be able to create React component */
import React from "react";

//bootstrap elements imported
import { Button, Form, Col } from "react-bootstrap";

export default function SearchForm(props) {
  //destructuring props for better legibility
  let { handleSubmit, handleOption, options, term, setTerm } = props;

  //return statement gives a bootstrap form and props to be passed to the parent component
  return (
    <Form inline onSubmit={handleSubmit}>
      <Form.Row className="align-items-center">
        <Col xs="auto" className="my-1">
          <Form.Control
            as="select"
            className="mr-sm-2"
            id="inlineFormCustomSelect"
            custom
            onChange={handleOption}
          >
            <option value={""} disabled selected>
              Choose Category
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Control>
        </Col>
        <Col xs="auto" className="my-1">
          <Form.Control
            className="mr-sm-2"
            id="inlineFormInputName2"
            placeholder="Enter Search Term"
            value={term}
            onChange={setTerm}
          />
        </Col>
        <Col xs="auto" className="my-1">
          <Button type="submit">Search</Button>
        </Col>
      </Form.Row>
    </Form>
  );
}
