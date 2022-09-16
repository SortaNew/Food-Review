import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./component.css"

function SubmitForm({handleSubmit}){
  
    return (
      <Row>
        <Col>
        <Col>
        <Form onSubmit={(e)=>{handleSubmit(e)}} id="center-form" style={{ width: '24rem' }}>

          <Form.Group className="mb-3">            
            <Form.Control name="image" type="text" placeholder="Enter food image Url" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control name="name" type="text" placeholder="Enter food name" />            
          </Form.Group>
    
          <Form.Group className="mb-3">            
            <Form.Control name="restaurant" type="text" placeholder="Enter restaurant name" />
          </Form.Group>

          <Form.Group className="mb-3">            
          <Form.Select name="category" aria-label="Default select example">
            <option>Select a category</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </Form.Select>
          </Form.Group>

          <Form.Select name="rating" aria-label="Default select example">
            <option>Rate your food</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>

          <div className="text-center">        
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
        </Col>
        </Col>
      </Row>
      );
    }


export default SubmitForm