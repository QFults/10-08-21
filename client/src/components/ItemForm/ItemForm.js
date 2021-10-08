import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ItemForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="item">
        <Form.Label>Item</Form.Label>
        <Form.Control type="text" placeholder="Enter your item" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Item
      </Button>
    </Form>
  )
}

export default ItemForm
